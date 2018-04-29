import React from 'react';
import Album from '../Album'

const AlbumComponent = (props) => {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Album</h1>
            {/* {<Album/>} */}
            {<Album album={props.match.params.album}/>}
        </div>
    );
}

export default AlbumComponent;