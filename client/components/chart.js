import React from 'react';
import ReactDOM from 'react-dom';
import { Chart } from 'react-google-charts';



class Gchart extends React.Component {
  constructor(props){
    super(props);
    this.state={
      options:{
             title: 'Vegetables Intake',
          is3D: true
      },
      data:[
             ['Fruit', 'Amount'],
             [ 'Apple',      12],
             [ 'Orange',      5.5],
             [ 'Pear',     14],
             [ 'Banana',      5],
             [ 'Pineapple',      3.5],
             [ 'Grapes',    7]
      ]
    };
  }
  render() {
      return (
        <Chart chartType="PieChart" data={this.state.data} options={this.state.options} graph_id="piechart_3d"  width={"100%"} height={"400px"}  legend_toggle={true} />
      );
  }
};

export default Gchart;
