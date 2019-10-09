import React from 'react';
//import {Card} from 'react-bootstrap';

class TalkShows extends React.Component {
    
    constructor(props){
        super(props)
       
        this.state = {
            talkshows: []
            };
    }
    
   
    componentDidMount = () => {
        fetch('/api/shows/')
        .then(res => res.json())
        .then(currentShow=> {
            console.log('here are the current shows:', currentShow)
            this.setState({talkshows: currentShow})
        })
    }

    // showList() {
    //     const Artist = props => (
    //         <Card style={{width: '18rem', height: '37rem'}} >
    //             <Card.Img variant='top' src={props.artist.artist_image} alt="artist" className="artist-image"/>
    //             <Card.Body>
    //                 <Card.Text className="about-text">
    //                     {props.artist.name} <br />
    //                     {props.artist.biography}
    //                 </Card.Text>
    //             </Card.Body>
    //         </Card>
    //     )
    //     return this.state.artists.map(function(currentArtist, i){
    //         return <Artist artist={currentArtist} key={i} />
    //     });
    // }

    render() {


        return (
            <div >
                <h1 className="home-text3">Listen To Our Talk Shows</h1>
                <p className="para-center">The FIA Broadcasting Network has 
                produced several talk shows since 2009. <br/> Below are a few of the 
                talk shows we've produced that cover topics such as marriage, entertainment in Atlanta 
                and relationship advice.</p>
            <div className="card-wrapper">

               
                </div>
                </div>
        )
    }
}



export default TalkShows;