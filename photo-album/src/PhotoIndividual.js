import React, { Component } from 'react';

import image1 from "./hardcoded_photos/dog1.jpg"

class PhotoIndividual extends Component {
    constructor(props){
        super(props);
        this.state = {
            image : image1,
        }
    }

    render(){
        return(
            <div>
                <img src={this.state.image}/>
            </div>
        )
    }
}

export default PhotoIndividual;