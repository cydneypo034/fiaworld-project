import React from 'react';
import GoogleMaps from './googlemaps.js';
import {Button} from 'react-bootstrap';

class Contact extends React.Component {
   
    render() {
        return (
            
            <div className="about-body">
                
                 <section className="hero is-medium has-bg-img">

                <div className="hero-body">
                    <div className="container">
                    
            <h6 className="contact-text">Contact Us</h6>
              <p className="subtitle has-text-centered">If you are an aspiring artist, film producer needing sound production, or an
              aspiring talk show host, feel free to contact us through the contact form below.</p>
                    <div className="text-center">
                
                
                <div >
            <Button variant="light" className="contact-socials" href='https://www.facebook.com/FIA.Broadcast.Network?fref=ts'>Facebook</Button>
                    
                <Button variant= "light" className="contact-socials" href="https://twitter.com/fbn99">Twitter</Button>
                    
                <Button variant="light" className="contact-socials" href="https://www.linkedin.com/in/dr-solomon-pollard-jr-33888026/">LinkedIn</Button>

                <Button variant="light" className="contact-socials" href="mailto: pollard@fiaworld.com">Email</Button>
                </div>
                    </div>
                    </div>
                </div>
                </section>
            <div className="google-map">
                <GoogleMaps />
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <div className="container">
                <div className="contact-fields">
                        
                
                        <form className="feedback-form">
                        <label className="subtitle">Your Name</label>
                        <div className="control">
                            <input 
                            className="input is-large" 
                            type="input" 
                            id="feedback-entry"
                            name="feedback-entry"
                            placeholder="Your Name"
                            required/>
                        </div>
                        <br />
                        <label className="subtitle">Your Email</label>
                        <div className="control">
                            <input 
                            className="input is-large" 
                            type="input" 
                            id="feedback-entry"
                            name="feedback-entry"
                            placeholder="Your Email"
                            required/>
                        </div>
                        <br />
                        <label className="subtitle">Your Message</label>
                        <div className="control">
                            <textarea 
                            className="textarea is-large" 
                            type="input" 
                            id="feedback-entry"
                            name="feedback-entry"
                            placeholder="Your Message"
                            required/>
                        </div>

                        <br />
                        <div className="control">
                        <button className="button is-dark">Submit</button>
                        </div>
                    </form>
                    </div>
        </div>
        <br />

              </div>
            
        )
    }

}



export default Contact;

