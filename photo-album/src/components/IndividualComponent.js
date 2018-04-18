import React from 'react';
import Photo from "../Photo";

import image1 from "../hardcoded_photos/dog1.jpg"



const Individual = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Individual</h1>
            <Photo image = {image1}/>
        </div>
    );
}

export default Individual;