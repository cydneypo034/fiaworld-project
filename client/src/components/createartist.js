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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" onChange={this.onChangeName} value={this.state.name} placeholder="Artist's name"/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default CreateArtist;