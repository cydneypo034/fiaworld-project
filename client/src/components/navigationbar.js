import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';



class NavigationBar extends React.Component {
    render() {
        return (
         <div>
           <Navbar bg="white" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">            
              <Nav.Link href="/" className="nav-hover">Home</Nav.Link>
                <Nav.Link href="/createartist" className="nav-hover">Create Artist</Nav.Link>
                <NavDropdown title="About" id="basic-nav-dropdown" className="nav-hover">
                  <NavDropdown.Item href="/about">About The Company</NavDropdown.Item>
                  <NavDropdown.Item href="/aboutprod">Meet The Producer</NavDropdown.Item>
                  
                </NavDropdown>
                <NavDropdown title="View More" id="basic-nav-dropdown" className="nav-hover">
                  <NavDropdown.Item href="/artists">Music Artists</NavDropdown.Item>
                  <NavDropdown.Item href="/movies">Movies and TV Shows</NavDropdown.Item>
                  <NavDropdown.Item href="/talkshows">Talk Shows</NavDropdown.Item>
                  
                </NavDropdown>
                <Nav.Link href="/contact" className="nav-hover">Contact</Nav.Link>
              </Nav>
              

            </Navbar.Collapse>
          </Navbar>
         </div>


            
        )
    }
}

export default NavigationBar;

/*
<nav className="navbar is-white" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                Home
              </a>
              
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

              
          
              
            </div>
          </nav>
*/
