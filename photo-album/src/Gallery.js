import React, { Component } from 'react';
import Photos from "./Photo.js"


class Gallery extends Component {
    constructor(props){
        super(props);
        this.state={
			gallery: []
		}
    }
    render(){
        return (
			<ul>
			{Album}
			</ul>

            
        );
    }
}


export default Gallery;