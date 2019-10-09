import React from 'react';
import facebook from './imagecomp/facebook.png';
import twitter from './imagecomp/twitter.png';
import linkedin from './imagecomp/linkedin.png';

class Contact extends React.Component {
    render() {
        return (
            <div className="about-body">
            <h6 className="contact-text">Contact Us |
            <a href='https://www.facebook.com/FIA.Broadcast.Network?fref=ts'><img src={facebook} alt="facebook" 
                    className="icon"/></a>
                    
                <a href="https://twitter.com/fbn99"><img src={twitter} alt="twitter" 
                className="icon"/></a>
                    
                <a href="https://www.linkedin.com/in/dr-solomon-pollard-jr-33888026/"><img src={linkedin} 
                    alt="linkedin" className="icon"/></a>

              </h6>

              <p className="para-center">If you are an aspiring artist, film producer needing sound production, or an
              aspiring talk show host, feel free to contact us through the contact form below.</p>

        <div className="contact-fields">
                <div className="field">
                <label className="label">Your Name</label>
                <div className="control has-icons-left">
                    <input className="input is-large" type="text" placeholder="Your Name"/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                    </span>
                </div>
                </div>

                <div className="field">
                <label className="label">Your Email</label>
                <div className="control has-icons-left">
                    <input className="input is-large" type="text" placeholder="Your Email"/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                    </span>
                </div>
                </div>


                <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                    <input className="input is-large" type="text" placeholder="Subject"/>
                </div>
                </div>

                <div className="field">
                <label className="label">Your Message</label>
                <div className="control has-icons-left">
                    <textarea className="textarea is-large" type="input" placeholder="Your Message" />
                </div>
                </div>


                <div className="control">
                <button className="button is-dark">Submit</button>
                </div>
            </div>

            <br />

           
              </div>
            
        )
    }

}

export default Contact;