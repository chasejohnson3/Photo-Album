import React from 'react';
import Album from '../Album'

const AlbumComponent = (props) => {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Album</h1>
            {<Album album={props.match.params.album}/>} {/*Display the album with the photos coming from a JSON.stringify version of an array that contains photo file names */}
        </div>
    );
}

export default AlbumComponent;