import React, { Component } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth.js'; 

class FriendsList extends Component {
    state= {
        friendsList: []
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth().get("http://localhost:5000/api/friends")
        .then(res => {
            console.log(res);
            this.setState({
                friendsList: res.data
            })
        })
        .catch(err => console.log(err))
    }



    render() {
        const { friendsList } = this.state;

        return (
            <div className="FriendsListWrapper">
                <h1>Friends List</h1>
            <div>
        {friendsList.map(friend => (
                <div key={friend.id}>
                <h1>{friend.name}</h1>
                <h2>{friend.email}</h2>
                <h2>{friend.age}</h2>
                </div>
            ))}
            </div>
            </div>
        )
    }
}

export default FriendsList
