import React, { Component } from 'react';
import Photos from "./Photo.js"


class Gallery extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    render(){
        return (
            <div>
                <Photos/>
            </div>
            
        );
    }
}

export default Gallery;