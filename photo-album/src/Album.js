import React, { Component } from 'react';
import Photo from "./Photo.js"


class Album extends Component {
    constructor(props){
        super(props);
        this.state={
           images: []           
        }
    }
    render(){
        return (
            <div>
                {/* <Photo/> */}
            </div>
            
        );
    }
}

export default Album;