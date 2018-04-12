import React, { Component } from 'react';
import PhotoIndividual from "./PhotoIndividual.js"


class Photos extends Component {
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

export default Photos;