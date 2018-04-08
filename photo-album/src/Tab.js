import React, { Component } from 'react';

class Tab extends Component{
    constructor(props){
        super(props);
    
        this.state={
            name: ""
        }
    }
    render(){
        return(
            <button>{this.state.name}</button>
        )
    }
}