import React, { Component } from 'react';

import Photo from "./Photo.js"

import image1 from "./hardcoded_photos/dog1.jpg"
import image2 from "./hardcoded_photos/dog2.jpg"
import image3 from "./hardcoded_photos/dog3.jpg"
import image4 from "./hardcoded_photos/dog4.jpg"

const images = [image1, image2, image3, image4];

class Album extends Component {
    constructor(props){
        super(props);
        this.state={   
            // photos: images.map((img) => {<Photo image = {img}/>})
            photos: [<Photo image={image1}/>,
                <Photo image={image2}/>,
                <Photo image={image3}/>, 
                <Photo image={image4}/>]
            
        }
    }
    render(){
        // const renderImage = (imageURL) => {return <Photo image = {imageURL}/>}
        const renderImage = (imageURL) => <img src = {imageURL}/>
        return (
			// <div onClick = {() => <Route path="/gallery" component={Gallery}/>} >
            <div>                
                {this.state.photos.map((photo) => <img src = {photo.props.image} onClick={() =>alert(photo.props.name)}/>)}
			</div>
        );
    }
}

export default Album;