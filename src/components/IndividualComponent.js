import React from 'react';
import Photo from "../Photo";

// import image1 from "../hardcoded_photos/dog1.jpg"
import photos from "../Album"



const Individual = (props) => {
    console.log(props.match.params.index);
    // const { match: {params}} = this.props;
    return (
        
        <div className="jumbotron">
            <Photo image={`/${props.match.params.photo}`}/>
        </div>
    );
}

export default Individual;