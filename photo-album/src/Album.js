import React, { Component } from 'react';

import Photo from "./Photo.js"

import image1 from "./hardcoded_photos/dog1.jpg"
import image2 from "./hardcoded_photos/dog2.jpg"
import image3 from "./hardcoded_photos/dog3.jpg"
import image4 from "./hardcoded_photos/dog4.jpg"

class Album extends Component {
    constructor(props){
        super(props);
        this.state={			
			images: [image2, image3, image4, image1],
        }
    }
	
    render(){  
		const renderImage = (imageURL) => {return <Photo image = {imageURL}/>}
        return (		
			<div>
			{this.state.images.map(renderImage)}
			</div>
        );
    }
}

export default Album;