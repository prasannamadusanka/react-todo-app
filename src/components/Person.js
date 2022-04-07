import React,{Component} from 'react';

function Person({person}){

    
       // const personList=persons.map(x=><h2>My name is {x.name}. My age is {x.age} years old</h2>)
        return (
            <div>
                <h2>I am {person.name}. I am {person.age} years old.</h2>
            </div>
        )
    
}

export default Person;