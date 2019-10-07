import React from 'react';

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

    render() {

        var { artists } = this.state;

        return (
            <div>
                <div>
                   
                   {artists.map(artist => (
                       <div key={artist.id}>
                           Name: {artist.name} 
                           | Biography: {artist.biography} 
                           | Image: <img src={`${artist.artist_image}`} />
                       </div>
                   ))}
       
                </div>
               
                </div>
        )
    }

}

export default Artists;

/*
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
