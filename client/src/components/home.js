import React from 'react';
import stephanie from './imagecomp/aubreysavage.jpg';
import chynah from './imagecomp/chynah.png';
import jasmine from './imagecomp/jasminepic.jpg';
import {Button} from 'react-bootstrap';
import LoginModal from './loginModal.js';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {addModalShow: false}
    }
    render() {
        let addModalClose = () => this.setState({addModalShow: false})
        return (
            <div>

            <section className="hero is-medium has-bg-img">

            <div className="hero-body">
                <div className="container">
                <h1 className="home-text2">
                    FIA Corporation
                </h1>
                <h2 className="subtitle has-text-centered">
                    FIA Corporation has been serving the 
                    Atlanta community in music as well as, 
                    video broadcasting and production since 1993. 
                    We are a Corporation that is multi-faceted by providing several
                    services in entertainment and media. 
                </h2>
                
                <div className="text-center">
                <button className="btn btn-outline-light" 
                onClick={() => this.setState({addModalShow: true})}>Admin Login</button>

                <LoginModal show={this.state.addModalShow} onHide={addModalClose} />
                </div> 
                </div>
            </div>
            </section>


            <section>
            <div className="card-wrapper">
                <div className="card has-background-dark">
                    <img src={stephanie} alt="stephanie" className="artist-image"/>
                    <br/>
                    <h3 className="about-text-card">Stephanie Bookman</h3>
                    <p className="para-center">Stephanie Bookman is an excellent songstress. She provides a musical experience that is spirit 
                    filled while her vocal quality is only surpassed by love for priase. A soft heart with the hope and faith of Hannah.</p>
                    <Button variant="outline-light">Book Here</Button>
                    <br></br>
                </div>

                <div className="card has-background-dark">
                <img src={chynah} alt="chynah" className="artist-image2"/>
                <br/>
                    <h3 className="about-text-card">Chynah Mari</h3>
                    <p className="para-center">Chynah Mari is truly one of a kind. Her writing skilz are ahead of the rap game 
                    and include her deeply profound spiritual enlightenment. High energy, a well known model, and spiritually in touch. </p>

                    <Button variant="outline-light">Book Here</Button>
                    <br></br>
                </div>

                <div className="card has-background-dark">
                <img src={jasmine} alt="jasmine" className="artist-image3"/>
                <br/>
                    <h3 className="about-text-card">Jasmine Seabron</h3>
                    <p className="para-center">Jasmine Seabron is a very talented gospel music singer. Her renditions of contemporary gospel standards are heart moving and although she is physically blind, 
                    her spiritual sight is unmistakable.   </p>
                    <Button variant="outline-light">Book Here</Button>
                    <br></br>
                </div>
            </div>
            </section>

            </div>
        )
    }

}

export default Home;