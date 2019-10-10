import React from 'react';

class CreateArtist extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            biography: '',
        }

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeBiography = this.onChangeBiography.bind(this)
        //this.onChangeArtistImage = this.onChangeArtistImage.bind(this)
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

    // onChangeArtistImage(e) {
    //     this.setState({
    //         artist_image: e.target.value
    //     })
    //     console.log('picture selected!')
    // }


    onSubmit = (e) => {
        e.preventDefault();

        console.log("Form Submitted")

        const newArtist = {
            name: this.state.name,
            biography: this.state.biography,
        }

        fetch('/api/artists/', {
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newArtist),
            method: "POST"
        })

            //Axios.post("api/artists/", newArtist)
            // .then(res => console.log(res.data))

        this.setState({
            name: '',
            biography: '',
        })

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

                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.name}
                        onChange={this.onChangeName} placeholder="Enter Name" />

                    <br />
                    <br />
                    <input type="text" value={this.state.biography}
                        onChange={this.onChangeBiography} placeholder="Enter bio" />
                    <br />
                    <br />

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