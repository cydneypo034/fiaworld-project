import React from 'react';
import {Card} from 'react-bootstrap';

class Artists extends React.Component {

    constructor(props){
        super(props)
       
        this.state = {
            artists: []
            };
    }
    
   
    componentDidMount = () => {
        fetch('/api/artists/')
        .then(res => res.json())
        .then(currentArtist => {
            console.log('here are the current artists:', currentArtist)
            this.setState({artists: currentArtist})
        })
    }

    artistList() {
        const Artist = props => (
            <Card style={{width: '18rem', height: '37.8rem'}}  >
                <div className="contai">
                <Card.Img variant='top' src={props.artist.artist_image} alt="artist" className="artist-image"/>
                
                   <Card.Body className="card-black">
                    <Card.Text className="about-text">
                        {props.artist.name} <br />
                        {props.artist.biography}
                    </Card.Text>
                    <div className="middle">
                   <div className="text">
                       <button className="btn btn-outline-light">Delete</button>
                   </div> 
                   </div>
                </Card.Body>
                </div>
            </Card>
        )
        return this.state.artists.map(function(currentArtist, i){
            return <Artist artist={currentArtist} key={i} />
        });
    }

    render() {


        return (
            <div className="about-body">
                <h1 className="home-text3">Meet Our Music Artists</h1>
                <p className="para-center">Mosa Recording Studios and Fia Gospel Productions have 
                produced several artists
                since it's inception in 1993. <br/> Below are a few of the 
                many incredible talents we've produced hit records from.</p>
            <div className="card-wrapper">
            
               {this.artistList()}
               
              
                </div>
                </div>
        )
    }
}

export default Artists;

