import React, { Component } from 'react';
import '../styles/App.css';

import TableTop from './TableTopComponent';
import Individual from './IndividualComponent';
import GalleryComponent from './GalleryComponent';
import AlbumComponent from './AlbumComponent';

// import image1 from "../hardcoded_photos/dog1.jpg"


// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


class App extends Component {
  render() {
    return (

      
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><Link to="/gallery/">gallery</Link></li>
              {localStorage.getItem("current_album") && <li><Link to={`/album/${localStorage.getItem("current_album")}`}>album</Link></li>} {/*If you click on the album link, it goes to the most recently visited album (stored in localStorage)*/}
              {localStorage.getItem("current_photo") && <li><Link to={`/individual/${localStorage.getItem("current_photo")}`}>individual</Link></li>} {/*If you click on the album link, it goes to the most recently visited photo (stored in localStorage)*/}
              <li><Link to="/tabletop">table top</Link>
              </li>
            </ul>
            <hr/>

          <Switch>
            <Route exact path="/" component={GalleryComponent} />
            <Route path="/gallery/" component={GalleryComponent}/>
            <Route path="/album/:album" component={AlbumComponent} />
            {/* <Route path={`/album/${localStorage.getItem("current_album")}`} component={AlbumComponent} /> */}
            <Route path="/individual/:photo" component={Individual} />
            <Route path="/tabletop" component={TableTop} />
          </Switch>


          </div>
        </div>
      </Router>
    );
  }
}

export default App;
