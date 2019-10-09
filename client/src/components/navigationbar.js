import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';



class NavigationBar extends React.Component {
    render() {
        return (
         <div>
           <Navbar className="navigate-bar" expand="lg">
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
              <Form inline>
              <FormControl type="text" placeholder="Email" className="mr-md-2" />
              <Button variant="outline-light">Newsletter Sign Up</Button>
            </Form>
              

            </Navbar.Collapse>
          </Navbar>
         </div>


            
        )
    }
}

export default NavigationBar;

