import { combineReducers } from 'redux';
import postReducer from './post_reducer.js';

export default combineReducers({
	posts: postReducer
})