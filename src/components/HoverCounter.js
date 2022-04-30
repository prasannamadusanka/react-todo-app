import React, { Component } from 'react'

class HoverCounter extends Component {
    
    
  render(){ 
      const {count, increment} = this.props
      return( 
      <button onMouseOver={increment}>Hovered {count} times</button>)
    
  }
}
export default HoverCounter;