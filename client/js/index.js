import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import Wrapper from '../components/window';
import {Provider, connect} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Add from '../state/reducer'
var actions = require('../state/actions')
import store from '../state/store'

//let store = applyMiddleware(thunk)(createStore)(Add)

let Holder = React.createClass({
  componentDidMount: function(){
    this.props.dispatch(actions.fetchData())
  },

  submitForm: function(item){
    //TODO dispatch AN ACTION
    this.props.dispatch(actions.addServing(item))
    this.props.dispatch(actions.fetchData())
    // console.log(item , 'item arrived to Holder')
  },

  render: function(){
    return (
      <div>
        <h1>Veggie Count</h1>
        <Wrapper item={this.props.test} onTodoSubmit={this.submitForm}/>
      </div>
    )
  }
})

const mapStateToProps = (state, props) => {
  // console.log('state:',state)
  return {test: state.data}
}

const Container = connect(mapStateToProps)(Holder)

ReactDom.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('app'));

console.log(`Client running in ${process.env.NODE_ENV} mode`);
