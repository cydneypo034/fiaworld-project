import React from 'react';

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

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
        console.log("name changed!")
    }

    onChangeBiography(e) {
        this.setState({
            biography: e.target.value
        })
        console.log("bio changed!")
    }

    onChangeArtistImage(e) {
        this.setState({
            artist_image: e.target.value
        })
        console.log('picture selected!')
    }


    onSubmit(e) {
        e.preventDefault();

            



        



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
                            
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="name" onChange={this.onChangeName} placeholder="Enter Name" />
                    <input type="text" name="biography" onChange={this.onChangeBiography} placeholder="Enter bio" />
                    <input type="file" name="artist_image" onChange={this.onChangeArtistImage} placeholder="choose file" />

                    <input type="submit" name="submit" value="submit" />
                </form>

               
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