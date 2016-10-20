import React from 'react';
import ReactDom from 'react-dom';
import UserInput from './input';
import Display from './display'

let Wrapper = React.createClass({
  render: function(){
    return (
      <div>
        <Display />
        <UserInput onTodoSubmit={this.props.onTodoSubmit}/>
      </div>
    );
  }
})
module.exports = Wrapper
