import React, { Component } from 'react';
import Photos from "./Photo.js"


class Background extends Component {
    constructor(props){
        super(props);
        this.state={
           tabsAvailable:  ["test", "test2", "test3"],
           
        }
    }
    render(){
        return (
            <div>
                {this.state.tabsAvailable.map((tab) => <button>{tab}</button>)}
                <Photos/>
            </div>
            
        );
    }
}

export default Background;