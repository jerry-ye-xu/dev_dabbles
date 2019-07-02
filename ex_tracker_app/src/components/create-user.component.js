import React, { Component } from 'react';
import axios from 'axios';
// Importing { Link } is not part of the 
// basic config for a component
// import { Link } from 'react-router-dom';

export default class CreateUser extends Component {
	constructor(props){
		super(props);
	
		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		// Creating variables in React.
		// You usually don't create variables directly, just a state.  
		this.state = {
			username: ''
		}

	}

	onChangeUsername(e) {
		this.setState({
			username: e.target.value
		});
	}

	onSubmit(e){
		e.preventDefault();

		const user = {
			username: this.state.username,
		}

		console.log(user);

		axios.post("http://localhost:5000/users/add", user)
			.then(res => console.log(res.data)); // prints the data on console.

		// Take the person back to the homepage. 
		// window.location = '/';
		this.setState({
			username: '',
		})
	}

	render() {
		return(
			<div>
				<h3>Create New User</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Username: </label>
						<input type="text" required
							className="form-control"
							value={this.state.username}
							onChange={this.onChangeUsername}
						/>
					</div>
					<div className="form-group">
						<input type="submit" value="Create User" className="btn btn-primary" />
					</div>
				</form>
			</div>
		)
	}
}