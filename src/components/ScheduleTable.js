import {Component} from "react";
import React from "react";

class ScheduleTable extends Component {
    render(){
        return <g className="guides">
            <g className="h">
                <line x1="0" y1="500" x2="800" y2="500"></line>
                <text x="0" y="500">0</text>
                <line x1="0" y1="400" x2="800" y2="400"></line>
                <text x="0" y="400">1</text>
                <line x1="0" y1="300" x2="800" y2="300"></line>
                <text x="0" y="300">2</text>
                <line x1="0" y1="200" x2="800" y2="200"></line>
                <text x="0" y="200">3</text>
                <line x1="0" y1="100" x2="800" y2="100"></line>
                <text x="0" y="100">4</text>
            </g>
            <g className="v">
                <line x1="100" y1="500" x2="100" y2="0"></line>
                <text x="100" y="500">1</text>
                <line x1="200" y1="500" x2="200" y2="0"></line>
                <text x="200" y="500">2</text>
                <line x1="300" y1="500" x2="300" y2="0"></line>
                <text x="300" y="500">3</text>
                <line x1="400" y1="500" x2="400" y2="0"></line>
                <text x="400" y="500">4</text>
                <line x1="500" y1="500" x2="500" y2="0"></line>
                <text x="500" y="500">5</text>
                <line x1="600" y1="500" x2="600" y2="0"></line>
                <text x="600" y="500">6</text>
                <line x1="700" y1="500" x2="700" y2="0"></line>
                <text x="700" y="500">7</text>
            </g>
        </g>
    }
}
export default ScheduleTable;