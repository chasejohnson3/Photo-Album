import React from 'react';
import Gallery from '../Gallery';

const GalleryComponent = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Gallery</h1>
            <Gallery/> {/*Show the gallery that contains the albums */}
        </div>
    );
}


export default GalleryComponent;