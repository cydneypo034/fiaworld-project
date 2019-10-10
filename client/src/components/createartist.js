import React from 'react';
import { Form, Button } from 'react-bootstrap';

class CreateArtist extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            name: '',
            biography: '',
            artist_image: ''
        }

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeBiography = this.onChangeBiography.bind(this)
        this.onChangeArtistImage = this.onChangeArtistImage.bind(this)
    }

    onChangeName(e)  {
        this.setState({
            name: e.target.value
        })
        console.log('name made!')
    }

    onChangeBiography(e) {
        this.setState({
            biography: e.target.value
        })

        console.log('bio made!')
    }

    onChangeArtistImage(e) {
        this.setState({
            artist_image: e.target.value
        })

        console.log("image choosen!")
    }

    handleSubmit(e, file, user) {
        e.preventDefault();

        var formData = new FormData();

        file.map((file, index) => {
            formData.append(`file${index}`, file)
        })

        formData.append('user', user)

        fetch('/api/artists/', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(success => {
            console.log("data made!")
        })
        .catch(error => console.log(error)
        );




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
                            

                <Form onSubmit={this.handleSubmit}>
                    
                    <Form.Label className="para-center">Name</Form.Label>
                    <Form.Control type="text" 
                    placeholder="Enter name" 
                    value={this.state.name}
                    onChange={this.onChangeName} />

                
                    <Form.Label className="para-center">Biography</Form.Label>
                    <Form.Control type="text" 
                    placeholder="Your biography must be under 100 characters" 
                    value={this.state.biography}
                    onChange={this.onChangeBiography} 
                    />

                    <Form.Label className="para-center">Choose File</Form.Label>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile" />
                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                        </div>
                
                <br />
                <Button variant="dark" type="submit" value="submit">
                    Submit
                </Button>
                </Form>
                        </div>

        )
    }
}

export default CreateArtist;

// console.log('Form test!')

//         const formData = new FormData();
//         const fileField = document.querySelector('input[type="file"]');


//         formData.append('artist_image', fileField.files[0])

//         fetch("/api/artists", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         }).then(response => response.json())

//         this.setState({
//             name: '',
//             biography: '',
//             artist_image: ''
//         })