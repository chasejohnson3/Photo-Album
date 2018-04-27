import React, { Component } from 'react';
import Photo from "./Photo.js"

import icon1 from "./hardcoded_photos/folderIcon.png"

import image1 from "./hardcoded_photos/dog1.jpg"
import image2 from "./hardcoded_photos/dog2.jpg"
import image3 from "./hardcoded_photos/dog3.jpg"
import image4 from "./hardcoded_photos/dog4.jpg"

class Folder extends Component{
	constructor(props){
		super(props);
		this.state={
		album: [image2, image3, image4, image1],
		icon: icon1
		}
	}
	render(){
		return(
				<img src = {this.state.icon} className = 'Folder'/>
				);
	}
}


class Gallery extends Component {
    constructor(props){
        super(props);
        this.state={
			folders : [<Folder/>, <Folder/>, <Folder/>]
        }
    }
	
    render(){  
		const renderFolder = (folderURL) => {return <Folder/>}
        return (
			<div>
			{this.state.folders.map(renderFolder)}
			</div>
        );
    }
}

export default Gallery;