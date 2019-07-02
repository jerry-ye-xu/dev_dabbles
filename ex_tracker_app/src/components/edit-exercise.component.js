import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';

// Importing { Link } is not part of the 
// basic config for a component
// import { Link } from 'react-router-dom';

export default class EditExercise extends Component {
	constructor(props){
		super(props);

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeDuration = this.onChangeDuration.bind(this);
		this.onChangeDate = this.onChangeDate.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
  
		this.state = {
			username: '',
			description: '',
			duration: 0,
			date: new Date(),
			users: []
		}
	}

	onChangeUsername(e) {
		// user set state property. 
		this.setState({
			// target is the textbox, what does 'e' do?
			// this updates the username element within that state.
			username: e.target.value
		});
	}

	onChangeDescription(e) {
		this.setState({
			description: e.target.value
		});
	}

	onChangeDuration(e) {
		this.setState({
			duration: e.target.value
		});
	}

	onChangeDate(date) {
		this.setState({
			date: date
		});
	}

	onSubmit(e){
		e.preventDefault();

		const exercise = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date
		}

		console.log(exercise);

		axios.post("http://localhost:5000/exercises/update/"+this.props.match.params.id, exercise)
			.then(res => console.log(res.data)); // prints the data on console.

		// Take the person back to the homepage. 
		window.location = '/';
	}

	// React Life-cycle method: methods that react will
	// automatically call at different points.
	
	// componentDidMount automatically called right before the page displays
	// using this to test and will change it to load directly from DB later. 
	componentDidMount() {
		axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
			.then(response => {
				this.setState({
					username: response.data.username,
					description: response.data.description,
					duration: response.data.duration,
					date: new Date(response.data.date)
				})
			})
			.catch(function (error){
				console.log(error)
			});

		axios.get('http://localhost:5000/users/')
		.then(response => {
			if (response.data.length > 0){
				this.setState({
					users: response.data.map(user => user.username),
				})
			}
		})
	}

	// Now to create the actual form itself. 
	render() {
		return(
			<div>
				<h3> Edit Exercise Log </h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Username: </label>
						<select ref="userInput" required 
							className="form-control"
							value={this.state.username}
							onChange={this.onChangeUsername}
						>

						{
							// Curly braces for JS. We do something fancy here. 
							this.state.users.map(function(user) {
									return <option
										key={user}
										value={user}
										>
										{user}
									</option>
								}
							)
							// Notice that the key value is user and returned value is user as well.
						}
						</select>
					</div>
					<div className="form-group">
						<label>Description: </label>
						<input type="text" required
						className="form-control"
						value={this.state.description}
						onChange={this.onChangeDescription}
						/>
					</div>
					<div className="form-group">
						<label>Duration (in minutes): </label>
						<input type="text"
							className="form-control"
							value={this.state.duration}
							onChange={this.onChangeDuration}
						/>
					</div>
					<div className="form-group">
						<label>Date: </label>
						<div>
							<DatePicker 
								selected={this.state.date}
								onChange={this.onChangeDate}
							/>
						</div>
					</div>
					<div className="form-group">
						<input type="submit" value="Edit Exercise Log" className="btn btn-primary"/>
					</div>						
				</form>						
			</div>
		)
	}
}