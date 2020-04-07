import React, { Component } from 'react'

import './book.css'

export default class BookList extends Component {
    constructor(props){
        super(props)
        this.state = {
            
            count:0,
            Information: false
        }
    }
    removeItem=()=>{
        if(this.state.count>0){
            this.setState({
                count: this.state.count-1
            })
        }
        
        
    }
    
    
    render() {
        
        
        return (
            <div className="main-container">
        
              
                       
                         <img src = {this.props.item.img}></img>
                         <div> Title :{this.props.item.title}</div>
                         <div> Author :{this.props.item.author}</div>
                         <button onClick = {this.removeItem}>Remove </button>
                         <button onClick = {() =>{
                             this.setState({
                                 count : 0
                             })

                         }}>Reset</button>
                         <button onClick = {()=>{
                             this.setState({
                                 count: this.state.count+1
                             })
                             console.log(this.state.count)
                         }}>add</button>
                         <div> Items in the Cart : {this.state.count} </div>
                         <button onClick={()=>{
                             this.setState({
                                 Information : true
                             })
                            
                         }}>Toggle Information</button>

                         <div>
                            { this.state.Information ? <div> {this.props.item.info}</div> : null}
                         </div>
                         <button onClick = {()=>this.props.deleteBook(this.props.item.id)}>Delete</button>
                        
                        
                        
    
                   
               
           
                
            </div>
        )
    }
}


