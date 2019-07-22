import React, { Component } from 'react';

// It connects components to your redux store that was provided by Provider component. 
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/post_actions.js';

import PropTypes from 'prop-types';

class Posts extends Component{
	// You can put this into application state. i.e. Redux. 
	// so once we handle this in actions we don't need any of this anymore. 
	// post is going to come from redux, the application state. 
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		posts: []
	// 	}
	// }

	// componentWillMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/posts')
	// 		.then(res => res.json())
	// 		.then(data => this.setState({posts: data}))
	// }

	// If all the console.logs() are working then
	// Now, post_reducer will be returning the state and items being fetched.
	// We have to get new items from the state. So now we need to use a function 
	// called `Map state to props`
	componentWillMount(){
		this.props.fetchPosts();
	}

	// a lifecycle method to add the newPost to all the existing posts
	componentWillReceiveProps(nextProps){
		if(nextProps.newPost){
			console.log('adding new post')
			this.props.posts.unshift(nextProps.newPost);
		}
	}

	render() {
		const postItems = this.props.posts.map(post => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</div>
		));
		return(
			<div>
				<h1>Posts</h1>
				{postItems}
			</div>
		)
	}
}

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
	newPost: PropTypes.object
}

// the posts on the LHS is from index.js
// the items is the payload we returned. 
// the idea here is to get the state from redux and map it to props
const mapStateToProps = state => ({
	posts: state.posts.items,
	newPost: state.posts.item
});
// is this is successful we should now have a this.props.posts

export default connect(mapStateToProps, { fetchPosts })(Posts);