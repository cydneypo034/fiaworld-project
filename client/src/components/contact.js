import React from 'react';

class Contact extends React.Component {
    render() {
        return (

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
        )
    }

}

export default Contact;