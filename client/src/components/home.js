import React from 'react';
import YoutubeVid from './youtube';
import stephanie from './imagecomp/stephanie.png';
import chynah from './imagecomp/chynah.png';
import jasmine from './imagecomp/jasmine.png';


class Home extends React.Component {
    render() {
        return (
            <div>

            <section className="hero is-light is-small">
            <div className="hero-body">
                <div className="container">
                <h1 className="home-text2">
                    FIA CORPORATION
                </h1>
                <h2 className="subtitle">
                    FIA Corporation has been serving the 
                Atlanta community in music as well as, 
                    video broadcasting and production since 1993. We are a Corporation that is multi-faceted by providing several
                    services in entertainment and media.
                </h2>
                </div>
            </div>
            </section>

            <YoutubeVid />

            <section>
            <div className="card-wrapper">
                <div className="card">
                    <img src={stephanie} alt="stephanie"/>
                    <h3 className="about-text2">Stephanie Bookman</h3>
                    <p className="para-center">Stephanie Bookman is an excellent songstress. She provides a musical experience that is spirit 
                    filled while her vocal quality is only surpassed by love for priase. A soft heart with the hope and faith of Hannah.</p>
                    <br></br>
                    <a href="https://www.youtube.com/watch?v=nbOuhNjfhvg&feature=youtu.be">Video Available Here</a>
                    <br></br>
                </div>

                <div className="card">
                <img src={chynah} alt="chynah" />
                    <h3 className="about-text2">Chynah Mari</h3>
                    <p className="para-center">Chynah Mari is truly one of a kind. Her writing skilz are ahead of the rap game 
                    and include her deeply profound spiritual enlightenment. High energy, a well known model, and spiritually in touch. </p>

                    <br></br>
                    <a href="http://www.fiaworld.com/rapp.htm">Music Available Here</a>
                    <br></br>
                </div>

                <div className="card">
                <img src={jasmine} alt="jasmine" />
                    <h3 className="about-text2">Jasmine Seabron</h3>
                    <p className="para-center">Jasmine Seabron is a very talented gospel music singer. Originally from Atlanta, she has spent 
                    the majority of her young career singing live. Her renditions of contemporary gospel standards are heart moving and although she is physically blind, 
                    her spiritual sight is unmistakable.   </p>
                    <br></br>
                    <a href="https://www.youtube.com/watch?v=OX5w-pqJnUE&feature=youtu.be">Video Available Here</a>
                    <br></br>
                </div>
            </div>
            </section>

            </div>
        )
    }

}

export default Home;