import React,{Component} from 'react';
import Person from './Person';
class NameList extends Component{

    render(){
        const persons=[
            {
                id:1,
                name:"bruce",
                age:30,
                skill:'react',
            },
            {
                id:2,
                name:"kadir",
                age:33,
                skill:'react',
            },
        ]
        const personList=persons.map(x=><Person key={x.id} person={x}></Person>)
        return (
            <div>{personList}</div>
        )
    }
}

export default NameList;