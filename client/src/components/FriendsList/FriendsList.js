import React, { Component } from 'react'
import EditFriend from '../EditFriend/EditFriend.js';
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';

class FriendsList extends Component {
    state= {
        friendsList: [],
        editFriend: true
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth().get("/friends")
        .then(res => {
            console.log(res);
            this.setState({
                friendsList: res.data
            })
        })
        .catch(err => console.log(err))
    }

    editFriend = (id, updatedUser) => {
        axiosWithAuth().put(`/friends/${id}`, updatedUser)
        .then( res => {
            console.log(res)
            this.props.history.push('/friends');
        })
        .catch(err => console.log(err))
    }

    deleteFriend = id => {
        axiosWithAuth().delete(`/friends/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    toggleEditField = () => {
        this.setState({ editFriend: (this.state.editFriend === true ? false : true ) })
    }

    render() {
        const { friendsList } = this.state;

        return (
            <div className="friends-list-wrapper">
                <h1>Friends List</h1>
                <button onClick={this.toggleEditField}>Edit</button>
            <div className="friends-list-container">
                {this.state.editFriend && <EditFriend editFriend={this.editFriend} deleteFriend={this.deleteFriend} />}
        {friendsList.map(friend => (
                <div key={friend.id} onClick={this.toggleEditField}>
                <h1>{friend.name}</h1>
                <h2>{friend.email}</h2>
                <h2>{friend.age}</h2>
                <p onClick={(e) => {
                    e.preventDefault();
                    this.deleteFriend(friend.id);
                }}>delete</p>
                </div>
            ))}
            </div>
            </div>
        )
    }
}

export default FriendsList
