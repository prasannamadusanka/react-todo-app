import React,{Component} from 'react';

class Form extends Component{
    constructor(){
        super()
        this.state={
            userName:'',
            topic:'react'
        }
    }
    handleUserNameChange=(event)=>{
        this.setState(
            {
                userName:event.target.value,
            }
        )
    }
    handleTopicChange=(event)=>{
        this.setState(
            {
                topic:event.target.value
            }
        )
    }

    onSubmitForm=(event)=>{
        alert(this.state.userName + this.state.topic)
        event.preventDefault( )
    }

    render(){
        return (
            <form onSubmit={this.onSubmitForm}>
                <div>
                    <label>Username</label>
                    <input value={this.state.userName} onChange={this.handleUserNameChange} type="text" ></input>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option>React</option>
                        <option>Angular
                        </option>
                    </select>
                </div>
                <div>
                    <input type="submit"></input>
                </div>
            </form>
        )
    }
}

export default Form;