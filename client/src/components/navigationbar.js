import React from 'react';
import facebook from './imagecomp/facebook.png';
import twitter from './imagecomp/twitter.png';
import linkedin from './imagecomp/linkedin.png';


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


              <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">
                    About
                  </a>

                <div className="navbar-dropdown">
                <a className="navbar-item" href="/about" >
                  About FIA Corporation
                </a>

                <a className="navbar-item" href="/aboutprod" >
                  Meet The Producer
                </a>
                </div>
                </div>

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

              <div>
              <a href='https://www.facebook.com/FIA.Broadcast.Network?fref=ts'><img src={facebook} alt="facebook" 
                    className="icon"/></a>
                    <a href="https://twitter.com/fbn99"><img src={twitter} alt="twitter" className="icon"/></a>
                    <a href="https://www.linkedin.com/in/dr-solomon-pollard-jr-33888026/"><img src={linkedin} 
                    alt="linkedin" className="icon"/></a>
              </div>
          
              
            </div>
          </nav>
        )
    }
}

export default NavigationBar;

/*
*/
