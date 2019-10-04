import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                
                <div className="about-box">
                <h1 className="about-text2">FIA Corporation: Serving Atlanta with Great Entertainment</h1>
                <p className="about-text">FIA Corporation has been serving the Atlanta community in music as well as, 
                    video broadcasting and production since 1993. While the compnay thrives in the entertainment categories,
                    some of the current corporate subsidaries include:</p> 

                    <h4 className="about-text-sub">TV Broadcast Productions</h4>
                    <h6 className="about-text">FIA Broadcasting provides appealing talk shows that connect to various artists. The format for the 
                        Hybrid TV shows are similar to regular TV shows, but are designed for the internet.
                    </h6>

                    <h4 className="about-text-sub">Music and Artist Productions</h4>
                    <h6 className="about-text">Music productions take place in MOSA studios (a FIA subsidiary) and involves either FIA Gospel 
                        and Atlanta Sub-Factor Production Teams. The collaborative efforts in the studios are aimed at artists across all music 
                        genres (although the primary focus is gospel).
                    </h6>
                    </div>


                </div>
        )
    }

}

export default About;