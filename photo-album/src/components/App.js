import React, { Component } from 'react';
import '../styles/App.css';

import TableTop from './TableTopComponent';
import Individual from './IndividualComponent';
import GalleryComponent from './GalleryComponent';
import AlbumComponent from './AlbumComponent';


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
              <li><Link to="/gallery">gallery</Link></li>
              <li><Link to="/album">albums</Link></li>
              <li><Link to="/individual">individual</Link></li>
              <li>
                <Link to="/tabletop">table top</Link>
              </li>
            </ul>
            <hr/>

          <Switch>
            <Route exact path="/" component={GalleryComponent} />
            <Route path="/gallery" component={GalleryComponent}/>
            <Route path="/album" component={AlbumComponent} />
            <Route path="/individual" component={Individual} />
            <Route path="/tabletop" component={TableTop} />
          </Switch>


          </div>
        </div>
      </Router>
    );
  }
}

export default App;
