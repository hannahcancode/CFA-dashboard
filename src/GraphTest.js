import React, { Component } from 'react';
import {
    util, Chart, DataSeries, BarChart, Pie, XAxis, YAxis, Stack, Group
} from 'diffract';
import PropTypes from 'prop-types';

const colors = ['#E91E63', '#2196F3', '#FF9800', '#4CAF50', '#673AB7'];
const width = 640;
const height = 240;
let cnt = 1;

const margins = {
    left: 50,
    bottom: 20,
    top: 0,
    right: 0
};

class GraphTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {index: 0, value: 0}
        };
    }

    getColors(d, i) {
        if (arguments.length === 2) {
            return colors[i];
        } else {
            return colors[d];
        }
    }

    render() {
        // const donut = this.getPieChart();
        const padding = {padding: '50px'};
        return (
            <Chart width={width} height={height}>
                <DataSeries data={this.props.productivityData}>
                    <Pie innerRadius={75} outerRadius={110}
                        onClick={(event, value, index) => this.setState({selected: {index: index, value: Math.floor(value)}})}
                        style={(d, i) => ({fill: this.getColors(i)})}>
                        <text className="donut-title" textAnchor="middle"
                            x={0} y={0} fontSize={18}>
                            {this.state.selected.value}
                        </text>
                        <text className="donut-subtitle" textAnchor="middle"
                            x={0} y={18} fontSize={10}>
                            {this.props.productivityLabels[this.state.selected.index]}
                        </text>

                    </Pie>
                </DataSeries>
            </Chart>
        );
    }
}

GraphTest.displayName = 'GraphTest';

GraphTest.propTypes = {
  productivityLabels: PropTypes.array.isRequired
}

export default GraphTest;
