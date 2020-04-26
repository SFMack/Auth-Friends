import React, { Component } from 'react';

class EditFriend extends Component {
    state = {
        updatedUser: {
            name: '',
            age: '',
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            updatedUser: {
                ...this.state.updatedUser,
                [e.target.name]: e.target.value
            }
        })
    }

    editFriend = e => {
        e.preventDefault();
        this.props.editFriend(1, this.state.updatedUser)
    }

    // deleteFriend = e => {
    //     e.preventDefault();
    //     this.props.deleteFriend(2);
    // }

    render() {
        return (
            <div className="AddFriendFormWrapper">
                <form onSubmit={this.editFriend}>
                    <input 
                        type="text"
                        name="name"
                        value={this.state.updatedUser.name}
                        placeholder="Enter your name"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="email"
                        value={this.state.updatedUser.email}
                        placeholder="Enter your email"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="age"
                        value={this.state.updatedUser.age}
                        placeholder="Enter your age"
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default EditFriend
