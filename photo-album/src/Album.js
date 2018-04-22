import React, { Component } from 'react';
import './styles/App.css';

import TableTop from './components/TableTopComponent';
import Individual from './components/IndividualComponent';
import Gallery from './components/GalleryComponent';
import AlbumComponent from './components/AlbumComponent';

import Photo from "./Photo.js"

import image1 from "./hardcoded_photos/dog1.jpg"
import image2 from "./hardcoded_photos/dog2.jpg"
import image3 from "./hardcoded_photos/dog3.jpg"
import image4 from "./hardcoded_photos/dog4.jpg"

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'

const images = [image1, image2, image3, image4];

class Album extends Component {
    constructor(props){
        super(props);
        this.state={   
            // photos: images.map((img) => {<Photo image = {img}/>})
            photos: [<Photo image={image1} name="photo1"/>,
                <Photo image={image2} name="photo2"/>,
                <Photo image={image3} name="photo3"/>, 
                <Photo image={image4} name="photo4"/>],
            currPhoto: null,
            
        }
    }

    currPhotoComponent(photo)
    {
        return (
            <div className="jumbotron">
                <Photo image = {this.state.currPhoto}/>            
            </div>
        );
    }
    
    render(){
        // const renderImage = (imageURL) => {return <Photo image = {imageURL}/>}
        const renderImage = (imageURL) => <img src = {imageURL}/>
        return (
			// <div onClick = {() => <Route path="/gallery" component={Gallery}/>} >
            <div>  
                <Router>
                    <div>
                    
                        {this.state.photos.map((photo) => // Render the image of each of the photos in the list that can be clicked on to follow their link
                        
                            <div className="container">
                            
                                <Link to={photo.props.name} onClick={()=> //  If we want to link to a photo, we have to save which photo was clicked
                                    {this.setState({
                                    currPhoto:photo.props.image})}}
                                >
                                    <img src = {photo.props.image}/> {/* This is what displays each photo*/}
                                </Link>  
                                
                            </div>
                            
                          
                            // {/* {this.state.photos.map((photo) => <img src = {photo.props.image} onClick={() => /*alert(photo.props.name)}/>)}*/ }
                        
                            
                            
                        )}
                        <Switch>                            
                            <Route path="/photo1" component={() => 
                                this.currPhotoComponent(this.state.currPhoto)
                            }/>
                            <Route path="/photo2" component={() => 
                                this.currPhotoComponent(this.state.currPhoto)
                            }/>
                            <Route path="/photo3" component={() => 
                                this.currPhotoComponent(this.state.currPhoto)
                            }/>
                            <Route path="/photo4" component={() => 
                                this.currPhotoComponent(this.state.currPhoto)
                            }/>
                        </Switch>
                   
                    
                        {/* <Route path="/photo1" component={() => {
                            return (
                                <div className="jumbotron">
                                    <Photo image = {image1}/>            
                                </div>
                            );
                        }}/>
                        <Route path="/photo2" component={Individual} />
                        <Route path="/photo3" component={Individual} />
                        <Route path="/photo4" component={Individual} /> */}
                    </div>
                </Router>  

                
            {/* //     <Router>
            //     <div className="App">
        
            //       <div className="container">
                   
        
                                   
            //         <Route path="/test" component={photo}/>
                  
        
        
            //       </div>
            //     </div>
            //   </Router>}/>)} */}
			</div>
        );
    }
}

export default Album;