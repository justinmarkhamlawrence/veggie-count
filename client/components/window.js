import React from 'react';
import ReactDom from 'react-dom';
import UserInput from './input';
import Display from './display'
// import Gchart from './chart'
let Wrapper = React.createClass({
  onTodoSubmit: function(item){
    this.props.onTodoSubmit(item);
    // console.log("new task on parent component: ", item);
  },
  render: function(){
    // console.log(this.props.item,"from the Wrapper")
    return (
      <div>
        <Display item={this.props.item}/>
        <UserInput onTodoSubmit={this.onTodoSubmit}/>
        
      </div>
    );
  }
})
module.exports = Wrapper
