import React from 'react';
import {Card} from 'react-bootstrap';

class Movies extends React.Component {
    
    constructor(props){
        super(props)
       
        this.state = {
            movies: []
            };
    }
    
   
    componentDidMount = () => {
        fetch('/api/movies/')
        .then(res => res.json())
        .then(currentMovie=> {
            console.log('here are the current movies:', currentMovie)
            this.setState({movies: currentMovie})
        })
    }

    movieList() {
         const Movie = props => (
             <Card style={{width: '21rem', height: '37rem'}} >
                 <Card.Img variant='top' src={props.movie.movie_image} alt="movie" className="artist-image"/>
                 <Card.Body>
                     <Card.Text className="about-text">
                         {props.movie.name} <br />
                         {props.movie.description}
                     </Card.Text>
                 </Card.Body>
             </Card>
         )
         return this.state.movies.map(function(currentMovie, i){
             return <Movie movie={currentMovie} key={i} />
         });
     }

    render() {


        return (
            <div >
                <h1 className="home-text3">View Our Movies</h1>
                <p className="para-center">KCSquared has been involved in the sound production of several movies
                 and plays here in Atlanta. We also have produced music videos for a few of the artists under FIA Gospel Productions. <br/> Below are a few of the 
                movies and plays we've done with the genres range from drama to comedies.</p>
            <div className="card-wrapper">

               {this.movieList()}
                </div>
                </div>
        )
    }
}



export default Movies;