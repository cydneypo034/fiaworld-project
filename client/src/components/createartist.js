import React from 'react';
import ampli from './imagecomp/amplipher.jpg'

class CreateArtist extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            name: '',
            biography: '',
            artist_image: ''
        }

        this.onChangeName = this.onChangeName.bind(this)
    }

    onChangeName(e)  {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();


    }

    render() {
        return (
            <div>
                <img src={ampli} alt="ampli" className="dj-photo" />
                <section className="hero is-light is-small">
            <div className="hero-body">
                <div className="container">
                <h1 className="home-text2">
                    Enter a New Artist
                </h1>
                
                </div>
            </div>
            </section>
                <div className="contact-fields">
                <div className="field">
                <label className="label">Your Name</label>
                <div className="control has-icons-left">
                    <input className="input is-large" type="text" placeholder="Name"/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-user"></i>
                    </span>
                </div>
                </div>

                <div className="field">
                <label className="label">Biography</label>
                <div className="control has-icons-left">
                    <textarea className="textarea is-large" type="input" placeholder="Biography" />
                </div>
                </div>

                <div >
                    <label className="label">Choose File</label>
                    <div>
                        <input className="file is-large" type="file" placeholder="Choose file" ></input>
                    </div>
                </div>
                <br />

                <div className="control">
                <button className="button is-dark">Submit</button>
                </div>
             
                        </div>
                        </div>

        )
    }
}

export default CreateArtist;