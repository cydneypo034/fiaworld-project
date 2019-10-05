import React from 'react';


class NavigationBar extends React.Component {
    render() {
        return (
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                Home
              </a>
              <label className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>



            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="/about" >
                  About
                </a>

                <a className="navbar-item" href="/createartist">
                  Create Artist
                </a>
          

                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                    More
                  </a>
          
                  <div className="navbar-dropdown">
                    <a className="navbar-item" href="/artists">
                      Music Artists
                    </a>
                    <a className="navbar-item" href="/movies">
                      Movies & Media
                    </a>
                    <a className="navbar-item" href="/talkshows">
                      Talk Shows
                    </a>
                  </div>
                  
                  
                </div>
                <a className="navbar-item" href="/contact">
                  Contact
                </a>
              </div>
          
              
            </div>
          </nav>
        )
    }
}

export default NavigationBar;

/*
*/
