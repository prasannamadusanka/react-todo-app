import React,{Component} from 'react';
import './styleSheet.css'
function StyleSheet(props){
    let className=props.primary?'primary': '';
     return(
         <div>
             <h1 className={className}>My styles</h1>
         </div>
     )
}

export default StyleSheet;