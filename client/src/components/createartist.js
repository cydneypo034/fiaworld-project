import React from 'react';
import { Form } from 'react-bootstrap';

class CreateArtist extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            biography: '',
            artist_image: ''
        }

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeBiography = this.onChangeBiography.bind(this)
        this.onChangeArtistImage = this.onChangeArtistImage.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeBiography(e) {
        this.setState({
            biography: e.target.value
        })
    }

    onChangeArtistImage(e) {
        this.setState({
            artist_image: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        console.log("Form Submitted")

        const newArtist = {
            name: this.state.name,
            biography: this.state.biography,
            artist_image: this.state.artist_image
        }

        fetch('api/artists/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newArtist)
        }).then(res => res.json())
        

        this.setState({
            name: '',
            biography: '',
            artist_image: ''
        });

        this.props.history.push('/artists');
    }

    render() {
        return (
            <div className="about-body">
                <section className="hero is-medium has-bg-img">

                    <div className="hero-body">
                        <div className="container">
                            <h3 className="home-text3">Create New Artist</h3>
                            <p className="para-center"> For a New Artist to be made, fill out the form below and
                                it will be added to the artist list!</p>
                        </div>
                    </div>
                </section>

                <form onSubmit={this.onSubmit} id="myForm" name="myForm">
                    <label htmlFor="name">Enter Name:</label>
                    <Form.Control type="text" 
                    id="name" 
                    value={this.state.name}
                    onChange={this.onChangeName} 
                    placeholder="Enter Name" />

                   
                    <label htmlFor="biography">Enter biography:</label>
                    <Form.Control type="text" 
                    id="biography" 
                    value={this.state.biography}
                    onChange={this.onChangeBiography} 
                    placeholder="Enter bio" />
               

                    <label htmlFor="artist_image">Enter URL:</label>
                    <Form.Control type="text" 
                    id="image" 
                    value={this.state.artist_image}
                    onChange={this.onChangeArtistImage} 
                    placeholder="Enter URL" />

                    <br />
                    <button className="btn btn btn-outline-light" type="submit" value="submit">Submit</button>
                </form>


            </div>

        )
    }
}

export default CreateArtist;


