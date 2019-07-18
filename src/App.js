import React, {Component} from 'react';
import './App.css';
import Schedule from './components/Schedule';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {data: []};
        let i;
        setInterval(()=>{
            clearInterval(i);
            let iFrom = this.getRandomInt(0, 500);
            let iTo = this.getRandomInt(100, 200);
            i = setInterval(()=>{
                this.setState({data:[...this.state.data, this.getRandomInt(iFrom, iTo)]});
            },500);
        }, 5000);
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
