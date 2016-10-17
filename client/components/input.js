import React from 'react';

let UserInput = (props) => {
  return (
    <div className='user-input'>
      <form id='input-form' onSubmit={props.handleSubmit}>
        <input className='input-box' type='text' value={props.value} onChange={props.handleChange}/>
        <button style={props.buttonStyle} className='submit-button' type='submit'>+</button>
      </form>
    </div>
  );
};

export UserInput;
