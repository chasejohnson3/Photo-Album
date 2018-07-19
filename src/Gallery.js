
import React, { Component } from 'react';
import Photo from "./Photo.js"
import { render } from "react-dom";
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'

const dogPhotoList = [
    "dog1.jpg",
    "dog2.jpg",
    "dog3.jpg",
    "dog4.jpg"
    ] //Yep, we hard-coded the photos - background was pretty low on the list of priorities
const babyPhotoList = [
    "baby1.jpg",
    "baby2.jpg",
    "baby3.jpg",
]


const folderIcon = "/folderIcon.png"

const albumList = [
    dogPhotoList,
    babyPhotoList
]
class Gallery extends Component {
    constructor(props){
                super(props);
                this.state={   
                    
                }
            }
	
    render(){  
        return (
            
                <div style={styles}>
                    <Router>
                    <div>
                        <Redirect from="/" to="/gallery/" /> {/* Bring us to the home page which shows the two albums */}
                        <Route path="/gallery/" exact component={GalleryHome} /> {/* Bring us to the home page which shows the two albums */}
                    </div>
                    </Router>
                </div>
        );
    }
} 

const AlbumLinks = () => {
    
    var curr_album = localStorage.getItem("current_album");
    return(
    

  <div style={{ backgroundColor: "lightgrey" }}>
    {albumList.map((album) => // Render the image of each of the photos in the list that can be clicked on to follow their link                       
        <div>
            {<Link className="Folder"             
                to={`/album/${JSON.stringify(album)}`} // Link to the folder with url param that is the stringified version of a the array of photo file names
                onClick={()=> {this.setState()}}>
                <img 
                    width="300"     
                    onClick={()=>{localStorage.setItem("current_album", JSON.stringify(album));}} // Set the current album (default of clicking the Album tab)
                    src = {`/${album[0]}`}/> {/* This is what displays the first photo of each album*/}
            </Link>}
        </div>
        )}
  </div>
);}

const GalleryHome = () => <AlbumLinks />; // This is necessary to turn on and off the viewing of the gallery when navigating betweeen tabs

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default Gallery;
