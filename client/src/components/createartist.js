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


                <div className="control">
                <button className="button is-dark">Submit</button>
                </div>
             
                        </div>
        )
    }
}

export default CreateArtist;