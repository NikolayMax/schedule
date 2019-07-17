import React, {Component} from 'react';
import './App.css';

class Schedule extends Component {
    constructor(props){
        super(props);
    }
    getRenderData(){
        let {data} = this.props;
        let time = 9;
        return `M 0,0 ` + data.map((item, key)=>`L ${time * (key+1)},${item}`).join(' ');
    }

    render() {
        return <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                <path d={this.getRenderData()} />
            </svg>;
    }
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {data: []};

        setInterval(()=>{
            this.setState({data:[...this.state.data, this.getRandomInt(0, 1000)]});
        },500);
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    render() {

        return <div className="App">
            <Schedule data={this.state.data}/>
        </div>;
    }
}

export default App;
