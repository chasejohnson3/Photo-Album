import React, { Component } from 'react';
import PhotoIndividual from "./Photo.js"


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
                <PhotoIndividual/>
            </div>
            
        );
    }
}

export default Album;