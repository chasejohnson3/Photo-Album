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
          
            <ul className="tab">
              <Link to="/gallery"><button class="tablinks"> gallery</button></Link>
              <Link to="/album"><button class="tablinks"> album</button></Link>
              <Link to="/individual"><button class="tablinks"> individual</button></Link>
              <Link to="/tabletop"><button class="tablinks"> tabletop</button></Link>
              
            </ul>
            <hr/>

          <Switch>
            <Route exact path="/" component={GalleryComponent} />
            <Route path="/gallery" component={GalleryComponent}/>
            <Route path="/album/:album" component={AlbumComponent} />
            {/* <Route path="/album" component={AlbumComponent} /> */}
            {/* <Route path="/individual" component={Individual} /> */}
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
