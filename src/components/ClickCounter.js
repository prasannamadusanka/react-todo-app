import React, { Component } from 'react'

class ClickCounter extends Component {
    
    
  render(){ 
      const {count, increment} = this.props
      return( 
      <button onClick={increment}>Click {count} times</button>)
    
  }
}
export default ClickCounter;