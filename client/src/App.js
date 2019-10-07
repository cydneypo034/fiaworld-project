import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './components/home.js';
import about from './components/about.js';
import createartist from './components/createartist.js'
import musicartists from './components/artists.js';
import movies from './components/movies.js';
import aboutprod from './components/aboutproducer.js';
import talkshows from './components/talkshows.js';
import contact from './components/contact.js';
import NavigationBar from './components/navigationbar.js';
import Footer from './components/footer.js'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/about" component={about} />
            <Route path="/aboutprod" component={aboutprod} />
            <Route path="/createartist" component={createartist} />
            <Route path="/artists" component={musicartists} />
            <Route path="/movies" component={movies} />
            <Route path="/talkshows" component={talkshows} />
            <Route path="/contact" component={contact} />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
