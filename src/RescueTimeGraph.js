import React, { Component } from 'react';
import {Chart, DataSeries, Pie} from 'diffract';

const colors = ['#E91E63', '#2196F3', '#FF9800', '#4CAF50', '#673AB7'];

class RescueTimeGraph extends Component {

  getColors(d, i) {
       if (arguments.length === 2) {
           return colors[i];
       } else {
           return colors[d];
       }
   }


  render() {
    console.log(this.props.productivityData)
    const width = 640;
    const height = 240;
     return (
       <div>
          <Chart width={width} height={height}>
            <DataSeries data={this.props.productivityData}>
                <Pie innerRadius={75} outerRadius={110} style={(d, i) => ({fill: this.getColors(i)})} >
                  <text className="donut-title" textAnchor="middle"
                      x={0} y={0} fontSize={18}>
                      {'Productivity Pulse'}
                  </text>
                  <text className="donut-subtitle" textAnchor="middle"
                      x={0} y={18} fontSize={10}>
                      {'diffract'}
                  </text>
                </Pie>
            </DataSeries>
         </Chart>
      </div>
    );
  }
}

export default RescueTimeGraph;
