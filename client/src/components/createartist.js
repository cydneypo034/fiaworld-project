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

    handleSubmit(e, data) {
        e.preventDefault();

        console.log('Form test!')

        const formData = new FormData();
        const fileField = document.querySelector('input[type="file"]');


        formData.append('artist_image', fileField.files[0])

        fetch("/api/artists", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json())

        this.setState({
            name: '',
            biography: '',
            artist_image: ''
        })
    }

    render() {
        return (
            <div className="about-body">

                <h3 className="home-text3">Create New Artist</h3>

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
                    <Form.Control 
                    type="file" 
                    placeholder="Choose file" 
                    accept= 'static/media/x-jpeg'
                    value={this.state.artist_image}
                    onChange={this.onChangeArtistImage}/>
                
                <br />
                <Button variant="dark" type="submit">
                    Submit
                </Button>
                </Form>
                        </div>

        )
    }
}

export default CreateArtist;