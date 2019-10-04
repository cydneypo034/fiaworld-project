import React from 'react';


class NavigationBar extends React.Component {
    render() {
        return (
            <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                Home
              </a>
          
              
            </div>
          
            <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item" href="/about" >
                  About
                </a>
          

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    More
                  </a>
          
                  <div class="navbar-dropdown">
                    <a class="navbar-item" href="/artists">
                      Music Artists
                    </a>
                    <a class="navbar-item" href="/movies">
                      Movies & Media
                    </a>
                    <a class="navbar-item" href="/talkshows">
                      Talk Shows
                    </a>

                <a class="navbar-item" href="/contact">
                  Contact
                </a>
              
                  </div>
                </div>
              </div>
          
              
            </div>
          </nav>
        )
    }
}

export default NavigationBar;
