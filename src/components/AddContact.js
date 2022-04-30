import React, { Component } from 'react'

class AddContact extends Component {
  constructor(){
    super()
    this.state={
      name:'',
      email:''
    }
  }
  nameChange=(e)=>{
    this.setState(
      {name:e.target.value}
      )
  }
  emailChange=(e)=>{
    this.setState(
      {email:e.target.value}
      )
  }
  add=(e)=>{
    e.preventDefault();
    if(this.state.name === "" && this.state.email===""){
      alert('All fileds are mandatory');
      return;
    }
  }
  render() {
    return (
      <div className='ui main'>
          <h2>
              Add Contact
          </h2>
          <form className='ui form' onSubmit={this.add}>
              <div className='field'>
                  <label>Name</label>
                  <input type="text" name="name" placeholder='Name' onChange={this.nameChange} value={this.state.name}></input>
              </div>
              <div className='field'>
                  <label>Email</label>
                  <input type="email" name="email" placeholder='E-mail' onChange={this.emailChange} value={this.state.email}></input>
              </div>
              <button className="ui button blue">Add</button>
          </form>
      </div>
    )
  }
}

export default AddContact;
