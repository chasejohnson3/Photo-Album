//  export default Gallery; 
import React, { Component } from 'react';
import Photo from "./Photo.js"
import { render } from "react-dom";
// import { BrowserRouter, Route, Link } from "react-router-dom";

// import icon1 from "./hardcoded_photos/folderIcon.png"

// import route Components here
import {
    BrowserRouter as Router,
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
    ]
const babyPhotoList = [
    "baby1.jpg",
    "baby2.jpg",
    "baby3.jpg",
]

// localStorage.setItem("albums", JSON.stringify(albumList))
localStorage.setItem("dogPhotoList", JSON.stringify(dogPhotoList))
localStorage.setItem("babyPhotoList", JSON.stringify(babyPhotoList))


const folderIcon = "/folderIcon.png"

const albumList = [
    dogPhotoList,
    babyPhotoList
]
// const Album = () => (
class Gallery extends Component {
    constructor(props){
                super(props);
                this.state={   
                    
                }
            }
	
    render(){  
        // debugger
        return (
            
                <div style={styles}>
                    <Router>
                    <div>
                        <Redirect from="/" to="/gallery/" />
                        <Route path="/gallery/" exact component={GalleryHome} />
                        <Route path="/gallery/section1"/>
                    </div>
                    </Router>
                </div>
            // </div>
        );
    }
} 

const AlbumLinks = () => {
    // debugger;
    var curr_album = localStorage.getItem("current_album");
    return(
    

  <div style={{ backgroundColor: "lightgrey" }}>
  {/* debugger */}
    {albumList.map((album) => // Render the image of each of the photos in the list that can be clicked on to follow their link                       
        <div>
            {(curr_album!=null) && <Link className="Folder" to={`/album/${curr_album}`} onClick={()=> {this.setState()}}>
            {/* <Link className="Folder" to={`/album/${JSON.stringify(album)}`} onClick={()=> {this.setState()}}> */}

            {/* <Link className="Folder" to={`/album`} onClick={()=> {this.setState()}}> */}

                <img width="300" onClick={()=>{localStorage.setItem("current_album", JSON.stringify(album)); alert("test");}} src = {`/${album[0]}`}/> {/* This is what displays each photo*/}
            </Link>}
        </div>
                
        )}
  </div>
);}

//localStorage!!!
//JSON.stringify
//JSON.parse()

const GalleryHome = () => <AlbumLinks />;

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default Gallery;