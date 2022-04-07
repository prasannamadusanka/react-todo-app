import React,{Component} from 'react';

class ChildComponent extends Component{
   

   

    render(){
        return (
            <div>
        <button onClick={this.props.greetHandler}>Greet Parent</button>
        </div>
        )
    }
}

export default ChildComponent;