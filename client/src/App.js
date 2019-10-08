import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home.js';
import About from './components/about.js';
import CreateArtist from './components/createartist.js'
import MusicArtists from './components/artists.js';
import Movies from './components/movies.js';
import AboutProd from './components/aboutproducer.js';
import TalkShows from './components/talkshows.js';
import Contact from './components/contact.js';
import NavigationBar from './components/navigationbar.js';
import Footer from './components/footer.js'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/aboutprod" component={AboutProd} />
            <Route path="/createartist" component={CreateArtist} />
            <Route path="/artists" component={MusicArtists} />
            <Route path="/movies" component={Movies} />
            <Route path="/talkshows" component={TalkShows} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
