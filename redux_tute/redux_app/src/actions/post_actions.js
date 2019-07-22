
// We still have to export this. 
import { FETCH_POSTS, NEW_POST } from './types';

// each action create is a function we need to export
// thunk allows us to call dispatch function directly for asynchrous requests
// dispatch ==> resolver and promise, whenever we want to send the data we call dispatch,
// just like if you are in a promise you would call resolve and then pass in what you want 
// to pass in. 
export function fetchPosts(){
	return function(dispatch){
	console.log('fetchPosts')
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(res => res.json())
		.then(posts => dispatch({
			type: FETCH_POSTS,
			payload: posts
			})
		);
	}
}

// ES6 syntax gives us 
// export function fetchPosts = () => dispatch => {
// 	fetch('https://jsonplaceholder.typicode.com/posts')
// 		.then(res => res.json())
// 		.then(posts => dispatch({
// 			type: FETCH_POSTS,
// 			payload: posts
// 			})
// 		);
// }

// we want to dispatch the data to the reducer. 
// payload is the data. 

export function createPost(postData){
	return function(dispatch){
		console.log('createPost')
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(postData)
		}) 
		.then(res => res.json()) // this is the response once the post is sent. 
		.then(post => dispatch({
			type: NEW_POST,
			payload: post
			})
		);
	}
}