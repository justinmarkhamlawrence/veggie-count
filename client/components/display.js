import React from 'react';

const Display = React.createClass({

  render: function(props){
    console.log('display.js item: ', this.props.item)
    // var name = this.props.item.name
    // var id = this.props.item._id
    // var itemList = this.props.item.map(function(){
    //   return (
    //     <li key={id}>{name}</li>
    //   )
    // });
    // console.log(this.props.item,"from the Display")
    return (
      <div>
        <ul className='list'>

        </ul>
      </div>
    )
  }
})

module.exports = Display
