import {Component} from "react";
import ScheduleTable from "./ScheduleTable";
import React from "react";

class Schedule extends Component {
    count=720;
    constructor(props){
        super(props);
    }
    getRenderData(){
        let {data} = this.props;
        let time = 9;
        return `0,500 ` + data.map((item, key)=>`${time * (key+1)},${item}`).join(' ');
    }
    getTranslate(){
        this.count -= 8;
        return `translateX(${this.count < 0 ? this.count : 0}px)`;
    }

    render() {

        return <svg viewBox="0 0 800 500" width="800" height="500">
            <ScheduleTable data={this.props.data}></ScheduleTable>
            <polyline style={{'transform': this.getTranslate()}} className="graph" points={this.getRenderData()}></polyline>
        </svg>;
    }
}
export default Schedule;