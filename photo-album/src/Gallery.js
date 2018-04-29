// import React, { Component } from 'react';
// import Photos from "./Photo.js"
// import Photo from "./Photo.js"

// import icon1 from "./hardcoded_photos/folderIcon.png"

// import image1 from "./hardcoded_photos/dog1.jpg"
// import image2 from "./hardcoded_photos/dog2.jpg"
// import image3 from "./hardcoded_photos/dog3.jpg"
// import image4 from "./hardcoded_photos/dog4.jpg"

// class Folder extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state={
// 		album: [image2, image3, image4, image1],
// 		icon: icon1
// 		}
// 	}
// 	render(){
// 		return(
// 				<img src = {this.state.icon} className = 'Folder'/>
// 				);
// 	}
// }
 
 
//  class Gallery extends Component {
//      constructor(props){
//             super(props);
//             this.state={
// 			    gallery: [],		    
// 			folders : [<Folder/>, <Folder/>, <Folder/>]
//         }
//      }
	
//     render(){  
        
// 		const renderFolder = (folderURL) => {return <Folder/>}
//          return (

            
// 			<div>
// 			{this.state.folders.map(renderFolder)}
// 			</div>
//          );
//      }
//  }
 

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
            <Link className="Folder" to={`/album/${JSON.stringify(album)}`} onClick={()=> {this.setState()}}>
            {/* <Link className="Folder" to={`/album`} onClick={()=> {this.setState()}}> */}

                <img width="300" src = {album[0]}/> {/* This is what displays each photo*/}
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