import React from 'react';


class NavigationBar extends React.Component {
    render() {
        return (
            <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                Home
              </a>
              <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
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
                  </div>
                  
                  
                </div>
                <a class="navbar-item" href="/contact">
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
