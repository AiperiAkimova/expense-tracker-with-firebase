import './Card.css'
import React from 'react'


class Card extends React.Component{
 
    render(){
       const classes= "card " + this.props.className
       return (
           <div className={classes}>
              
               {this.props.children}
              
           </div>
       ) 
    }
}

// function  Card(props){
//     const classes = "card " + props.className
//     return (
//         <div className={classes}>
//             {/* HEADER */}
//             {props.children}
//             {/* FOOTER */}
//         </div>
//     )
// }

export default Card