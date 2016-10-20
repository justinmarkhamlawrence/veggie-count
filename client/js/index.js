import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import Wrapper from '../components/window';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Add from '../state/reducer'
import store from '../state/store'
//let store = applyMiddleware(thunk)(createStore)(Add)

let Container = React.createClass({
  submitForm: function(item){
    console.log(item)
  },

  render: function(){
    return (
      <div>
        <h1>Veggie Count</h1>
        <Wrapper onTodoSubmit={this.submitForm}/>
      </div>
    )
  }
})


ReactDom.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('app'));

console.log(`Client running in ${process.env.NODE_ENV} mode`);
