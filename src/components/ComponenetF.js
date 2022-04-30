import React, { Component } from 'react'
import { consumer } from './UserContext'
class ComponenetF extends Component {
  render() {
    return (
     <consumer>
         {
             username=>{
                 return <div>
                     hello {username}
                 </div>
             }
         }
     </consumer>
    )
  }
}
export default ComponenetF