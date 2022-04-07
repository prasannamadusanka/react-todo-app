import React,{Component} from 'react';

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Welcome visitor',
        }
        this.changeMessage=this.changeMessage.bind(this);
    }

    changeMessage(){
        this.setState({
            message:'Thank you for subscribing',
        })
    }

    render(){
        return (
            <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Subscribe me</button>
        </div>
        )
    }
}

export default Message;