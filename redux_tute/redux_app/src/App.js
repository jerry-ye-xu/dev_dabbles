import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';

import Posts from './components/posts.js';
import PostForm from './components/post_form.js';

import store from './store.js';

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm /> 
          <hr />
          <Posts />
          <hr />
        </div>
      </Provider>
    );
  }
}

export default App;
