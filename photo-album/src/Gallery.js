// import React, { Component } from 'react';
// import Photos from "./Photo.js"


// class Gallery extends Component {
//     constructor(props){
//         super(props);
//         this.state={
// 			gallery: []
// 		}
//     }
//     render(){
//         return (
// 			// <ul>
// 			// {Album}
// 			// </ul>
//             <h1>test</h1>
            
//         );
//     }
// }


// export default Gallery;

import React, { Component } from 'react';
import Photo from "./Photo.js"
import { render } from "react-dom";
// import { BrowserRouter, Route, Link } from "react-router-dom";

import TableTop from './components/TableTopComponent';
import Individual from './components/IndividualComponent';
import GalleryComponent from './components/GalleryComponent';
import AlbumComponent from './components/AlbumComponent';

// import route Components here
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'

const dogPhotoList = [
    "/dog1.jpg",
    "/dog2.jpg",
    "/dog3.jpg",
    "/dog4.jpg"
    ]
const babyPhotoList = [
    "/baby1.jpg",
    "/baby2.jpg",
    "/baby3.jpg"
]

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
        return (
                <div style={styles}>
                    <Router>
                    <div>
                        <Route path="/gallery/" exact component={GalleryHome} />
                        <Route path="/gallery/section1"/>
                    </div>
                    </Router>
                </div>
            // </div>
        );
    }
} 

const AlbumLinks = () => (
  <div style={{ backgroundColor: "lightgrey" }}>
    {albumList.map((album) => // Render the image of each of the photos in the list that can be clicked on to follow their link                       
        <div>
            <Link to={`/album${album}`} onClick={()=> {this.setState()}}>
            <img src = {album}/> {/* This is what displays each photo*/}
            </Link>  
        </div>
                
        )}
  </div>
);

//localStorage!!!
//JSON.stringify
//JSON.parse()

const GalleryHome = () => <AlbumLinks />;

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default Gallery;