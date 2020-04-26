import React, { Component } from 'react';

import {axiosWithAuth} from '../../utils/axiosWithAuth.js';

class AddFriend extends Component {
    state = {
        newUser: {
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            newUser: {
                ...this.state.newUser,
                [e.target.name]: e.target.value
            }
        })
    }

    addFriend = e => {
        e.preventDefault();
        axiosWithAuth().post('/friends', this.state.newUser)
        .then( res => {
            console.log(res)
            this.props.history.push('/friends');
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="AddFriendFormWrapper">
                <form onSubmit={this.addFriend}>
                    <input 
                        type="text"
                        name="name"
                        value={this.state.newUser.name}
                        placeholder="Enter your name"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="email"
                        value={this.state.newUser.email}
                        placeholder="Enter your email"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="age"
                        value={this.state.newUser.age}
                        placeholder="Enter your age"
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddFriend
