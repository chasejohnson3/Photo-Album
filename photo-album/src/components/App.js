import React, { Component } from 'react';
import '../styles/App.css';

import TableTop from './TableTopComponent';
import Individual from './IndividualComponent';
import GalleryComponent from './GalleryComponent';
import AlbumComponent from './AlbumComponent';



import Table from '../TableTop.js'
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
	constructor(){
		super()
		this.state = {
			isHidden: true
		}
	}
	toggleHidden () {
    this.setState({
		isHidden: !this.state.isHidden
		})
	}
  render() {
    return (

      
      <Router>
        <div className="App">
          <div className="container">
            <ul className="tab">
              <Link to="/gallery/"><button className="tablinks"> Gallery</button></Link>
              {localStorage.getItem("current_album") && <Link to={`/album/${localStorage.getItem("current_album")}`}><button className="tablinks"> Album</button></Link>} {/*If you click on the album link, it goes to the most recently visited album (stored in localStorage)*/}
              {localStorage.getItem("current_photo") && <Link to={`/individual/${localStorage.getItem("current_photo")}`}><button className="tablinks"> Individual</button></Link>} {/*If you click on the album link, it goes to the most recently visited photo (stored in localStorage)*/}
			 
				<button onClick={this.toggleHidden.bind(this)} className = "linkButton" ><button class="tablinks">TableTop</button> </button> {/*Toggle on an off seeing the table top*/}
        </ul>
				{!this.state.isHidden &&  <div>{<Table/>}</div>}
            
			
			
            <hr/>

          <Switch> {/*These are the possible tab paths to be taken when a tab is clicked*/}
            <Route exact path="/" component={GalleryComponent} />
            <Route path="/gallery/" component={GalleryComponent}/>
            <Route path="/album/:album" component={AlbumComponent} /> {/*Album is a url parameter that contains JSON stringified version of the array of photos in an album that was clicked*/}
            <Route path="/individual/:photo" component={Individual} /> {/*photo is a url parameter that contains the photo file name of a clicked photo*/}
            <Route path="/tabletop" component={TableTop} />
          </Switch>


          </div>
        </div>
      </Router>
    );
  }
}

export default App;
