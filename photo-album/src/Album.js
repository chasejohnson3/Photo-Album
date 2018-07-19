import React, { Component } from 'react';
import Photo from "./Photo.js"
import { render } from "react-dom";

import TableTop from './components/TableTopComponent';
import Individual from './components/IndividualComponent';
import GalleryComponent from './components/GalleryComponent';
import AlbumComponent from './components/AlbumComponent';

// import route Components here
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'

  var photos = [] // photos will be populated with the file names of the photos in the album that is clicked

class Album extends Component {
    constructor(props){
                super(props);
                this.state={  
                    photoList: props.album, 
                    
                }
            
    }

    render(){
        photos = JSON.parse(this.props.album)
        return (
                <div style={styles}>
                    <Router>
                    <div>
                        <Route path="/album/:album" exact component={AlbumHome} /> {/* When an album is clicked, it routes by passing url param of the array containing photo file names*/}
                    </div>
                    </Router>
                </div>
        );
    }
} 

const PhotoLinks = () => {
    var curr_photo = localStorage.getItem("current_photo");
    return (
    <div style={{ backgroundColor: "lightgrey" }}>
        {photos.map((photo) => // Render the image of each of the photos in the list that can be clicked on to follow their link                       
            
            <div>
                <Link to={`/individual/${photo}`} onClick={()=> {this.setState()}}>   {/*If we want to link to a photo, we have to save which photo was clicked */}
                    <img 
                        className="Photo" 
                        width="600"  
                        onClick={()=>{localStorage.setItem("current_photo", photo);}} // When a photo is clicked, save the photo's file name in local storage - it will be the default for the 'Individual' tab until another is clicked
                        src = {`/${photo}`}
                    /> {/* This is what displays each photo*/}
                </Link>  
            </div>
                    
            )}
    </div>
);}

const AlbumHome = () => <PhotoLinks/>;

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default Album;
