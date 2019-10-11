import React from 'react';

class Contact extends React.Component {
   
    render() {
        return (
            
            <div className="about-body">
                 <section className="hero is-medium has-bg-img">

                <div className="hero-body">
                    <div className="container">
                    
            <h6 className="contact-text">Contact Us</h6>
            

            <div className="contact-socials">
            <a href='https://www.facebook.com/FIA.Broadcast.Network?fref=ts'>Facebook </a>
                    
                <a href="https://twitter.com/fbn99">Twitter </a>
                    
                <a href="https://www.linkedin.com/in/dr-solomon-pollard-jr-33888026/">LinkedIn</a>
                </div>


              <p className="para-center">If you are an aspiring artist, film producer needing sound production, or an
              aspiring talk show host, feel free to contact us through the contact form below.</p>
                    <div className="text-center">
                
                    </div>
                    </div>
                </div>
                </section>


        <div className="contact-fields">
                

                <form className="feedback-form">
                

                <label className="subtitle">Your Message</label>
                <div className="control has-icons-left">
                    <textarea 
                    className="textarea is-large" 
                    type="input" 
                    id="feedback-entry"
                    name="feedback-entry"
                    placeholder="Your Message"
                    required/>
                </div>


                <div className="control">
                <button className="button is-dark">Submit</button>
                </div>
            </form>

            <br />

           
              </div>
              </div>
            
        )
    }

}

export default Contact;