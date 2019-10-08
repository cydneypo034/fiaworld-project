import React from 'react';
import {Card, Button} from 'react-bootstrap';

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
            <Card style={{width: '18rem', height: '37rem'}} >
                <Card.Img variant='top' src={props.artist.artist_image} alt="artist"/>
                <Card.Body>
                    <Card.Text className="about-text">
                        {props.artist.name} <br />
                        {props.artist.biography}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
        return this.state.artists.map(function(currentArtist, i){
            return <Artist artist={currentArtist} key={i} />
        });
    }

    render() {


        return (
            <div >
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
//'http://localhost:8000/media/uploads/Screen_Shot_2019-10-06_at_7.56.35_PM.png'
}

export default Artists;

/*        var { artists } = this.state;

 <Card style={{width: '18rem'}}>
                   
                   {artists.map(artist => (
                       <div key={artist.id}>
                           Name: {artist.name} 
                           | Biography: {artist.biography} 
                           | Image: <img src={artist.artist_image} alt="artist"/>
                       </div>
                   ))}
       
                </Card>
artistList() {
        const Artist = props => (
         <div className="card">
             <img src={this.props.artist_image} alt="artist candid"/>
             <div className="card-body">
                 <div className="title">{props.artist.name}</div>
             <div className="content">
                 Name: {props.artist.name} <br></br>
                 Biography: {props.artist.biography} <br></br>
                 Artist Image: {props.artist.artist_image} <br></br>
             </div>
                
         </div>
         </div>
 ) 
         return this.state.artists.map(function(currentArtist, i){
             return <Artist artist={currentArtist} key={i} />;
         });
     }
*/
