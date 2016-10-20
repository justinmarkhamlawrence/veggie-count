import React from 'react';

let UserInput = React.createClass({
  handleSubmit: function(e){
    e.preventDefault()
    let newTask = this.refs.theInput.value;
		console.log('NewTask ', newTask);
		this.props.onTodoSubmit(newTask);
		//Clears the value on Submit
		this.refs.theInput.value = '';
  },
  render: function(props) {
    return (
      <div className='user-input'>
        <form id='input-form' onSubmit={this.handleSubmit}>
          <input className='input-box' type='text' ref='theInput' />
          <button className='submit-button' type='submit'>+</button>
        </form>
      </div>
    )
  }
})

module.exports = UserInput
