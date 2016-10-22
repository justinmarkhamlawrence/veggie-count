import React from 'react';

const Display = React.createClass({
  //add logic to rerender clean display for each day
  render: function(props){
    console.log('display.js item: ', this.props.item)
    // var name = this.props.item.name
    // var id = this.props.item._id
    var itemList = this.props.item.map(function(val){
      return (
        <li key={val._id}>{val.name}: {val.time}</li>
      )
    });
    // console.log(this.props.item,"from the Display")
    return (
      <div>
        <ul className='list'>
          {itemList}
        </ul>
      </div>
    )
  }
})

module.exports = Display
