import React from 'react';
import djmix from './imagecomp/dj-mixer.jpg';

class Contact extends React.Component {
    render() {
        return (
            <div>
            
                <img src={djmix} alt="djmix" className="dj-photo" />
               
        <div className="contact-fields">
            <h3 className="home-text2">Contact Us</h3>
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
            </div>
        )
    }

}

export default Contact;