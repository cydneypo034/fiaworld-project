import React from 'react';
import FiaGospel from './imagecomp/fiagospelimage.jpg'

class About extends React.Component {
    render() {
        return (
            <div>
                <img src={FiaGospel} alt="gospel image with treble note and dove" className="about-gospelpic" />
                <div className="about-box">
                <h1 className="about-text2">FIA Corporation: Serving Atlanta with Great Entertainment</h1>
                <p className="about-text">FIA Corporation has been serving the 
                Atlanta community in music as well as, 
                    video broadcasting and production since 1993. While the 
                    compnay thrives in the entertainment categories,
                    some of the current corporate subsidaries include:</p> 

                <h4 className="about-text-sub">TV Broadcast Productions</h4>
                <h6 className="about-text">FIA Broadcasting provides appealing 
                talk shows that connect to various artists. The format for the 
                        Hybrid TV shows are similar to regular TV shows, but 
                        are designed for the internet.
                </h6>

                <h4 className="about-text-sub">Music and Artist Productions</h4>
                <h6 className="about-text">Music productions take place in MOSA 
                    studios (a FIA subsidiary) and involves either FIA Gospel 
                    and Atlanta Sub-Factor Production Teams. The collaborative 
                    efforts in the studios are aimed at artists across all music 
                    genres (although the primary focus is gospel).
                </h6>

                <h4 className="about-text-sub">KSC-Squared Film and Animations</h4>
                <h6 className="about-text">KCS-Squared Film and Animations 
                creatively focuses on a wide range of film, animation, and music videos.
                The developed products reflect FIA's attention to detail in pursuit
                of excellence.
                </h6>

                <h4 className="about-text-sub">Studio Software</h4>
                <h6 className="about-text"> FIA's Song and Artist Tracking System was
                developed to facilitate day to day operations of a music studio and
                handle aspects of independent label management. This multifaceted
                tracking system is an extremely valuable tool that is being marketed to
                individuals or companies who want more organization and the ability
                to measure company growth.
                </h6>

                <h4 className="about-text-sub">WFIA Hybrid Radio Station</h4>
                <h6 className="about-text">WFIA is an automated system that showcases
                both music and talk show productions 24-hours a day and 7-days per
                week. Visitors can hear both pre-recorded talk shows and their
                favorite FIA artists.
                </h6>
                </div>


                </div>
        )
    }

}

export default About;