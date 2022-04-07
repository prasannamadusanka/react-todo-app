import React,{Component} from 'react';

class Counter extends Component{
    constructor(){
        super()
        this.state={
            counter:0,
        }
    }

    increment(){
        this.setState((prevState)=>({
            counter:prevState.counter+1,
        }))
    }

    incrementFive(){ 
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }


    render(){
        return (
            <div>
        <h1>Count Value : {this.state.counter}</h1>
        <button onClick={()=>this.incrementFive()}>increment Value</button>
        </div>
        )
    }
}

export default Counter;