// here we evaluate any actions that are committed. e.g. fetching our post and creating a new post.
// for actions, types (basically constants) are created. 

import { FETCH_POSTS, NEW_POST } from '../actions/types';

// an object with an items array <-- represents the posts that come from our action, which is where
// we are going to put the fetch request. We're also going to have an item, which represents the single
// post that we are going to add when we get the response back. 
const initialState = {
	items: [],
	item: {}
}


// evaluates the action type that we are dealing with. 
// takes in action which MUST include a type. 
// If it includes data it must also have a payload. 
export default function(state = initialState, action){
	switch(action.type){
		case FETCH_POSTS:
			console.log('reducer, FETCH_POSTS');
			return {
				...state,
				items: action.payload
			};
		case NEW_POST:
			console.log('reducer, NEW_POST');
			return {
				...state,
				item: action.payload
			};			
		default:
			return state; 
	}	
}

// once this is done we need to implement this in our post component. 

// Re: NEW_POST - since we are using JSON place holder, it doesn't add new item to database 
// and thus we can't just return the all of the items from a DB. 
// So instead we return an item and then push it onto the array holding the posts.