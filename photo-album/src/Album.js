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

 var photos = [
    "dog1.jpg",
    "dog2.jpg",    
    ]
// const Album = () => (
class Album extends Component {
    constructor(props){
                super(props);
                this.state={  
                    photoList: props.album, 
                    
                }
                // photos = props.album
            
    }

    render(){
        // photos = this.props.album    
        // localStorage.setItem("currentAlbum", )    
        return (
                <div style={styles}>
                    {/* <h2>{this.state.photoList}</h2> */}
                    {/* <h2>{photos}</h2> */}
                    {/* {localStorage.setItem("currentAlbum")} */}
                    {/* <h2>{JSON.parse(localStorage.getItem("currentAlbum"))}</h2> */}
                    <h1>{this.props.album}</h1>
                    {/* {photos = this.props.album.map((albumItem) => )} */}
                    {/* <h1>{photos}</h1> */}
                    <Router>
                    <div>
                        <Route path="/album/:album" exact component={AlbumHome} />
                        <Route path="/album/section1"/>
                    </div>
                    </Router>
                </div>
        );
    }
} 

const PhotoLinks = () => (
  <div style={{ backgroundColor: "lightgrey" }}>
    {/* <h2>{JSON.parse(localStorage.getItem("currentAlbum"))}</h2> */}
    {/* <h2>{photos}</h2>
    <h1>test</h1> */}
    {/* {JSON.parse(localStorage.getItem("currentAlbum")).map((photo) => // Render the image of each of the photos in the list that can be clicked on to follow their link                        */}
    {photos.map((photo) => // Render the image of each of the photos in the list that can be clicked on to follow their link                       

        <div>
            <Link to={`/individual/${photo}`} onClick={()=> {this.setState()}}>   {/*If we want to link to a photo, we have to save which photo was clicked */}               
            {/* <h1>{photo}</h1> */}
            <img src = {`/${photo}`}/> {/* This is what displays each photo*/}
            </Link>  
        </div>
                
        )}
  </div>
);

//localStorage!!!
//JSON.stringify
//JSON.parse

const AlbumHome = () => <PhotoLinks/>;

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default Album;