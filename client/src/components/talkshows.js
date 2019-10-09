import React from 'react';
import {Card} from 'react-bootstrap';

class TalkShows extends React.Component {
    
    constructor(props){
        super(props)
       
        this.state = {
            shows: []
            };
    }
    
   
    componentDidMount = () => {
        fetch('/api/shows/')
        .then(res => res.json())
        .then(currentShow=> {
            console.log('here are the current shows:', currentShow)
            this.setState({shows: currentShow})
        })
    }

    showList() {
         const Show = props => (
             <Card style={{width: '21rem', height: '37rem'}} >
                 <Card.Img variant='top' src={props.show.show_image} alt="movie" className="artist-image"/>
                 <Card.Body>
                     <Card.Text className="about-text">
                         {props.show.name} <br />
                         {props.show.description} <br />
                         {props.show.hosts}
                     </Card.Text>
                 </Card.Body>
             </Card>
         )
         return this.state.shows.map(function(currentShow, i){
             return <Show show={currentShow} key={i} />
         });
     }

    render() {


        return (
            <div >
                <h1 className="home-text3">Listen To Our Talk Shows</h1>
                <p className="para-center">The FIA Broadcasting Network has 
                produced several talk shows since 2009. <br/> Below are a few of the 
                talk shows we've produced that cover topics such as marriage, entertainment in Atlanta 
                and relationship advice.</p>
            <div className="card-wrapper">

               {this.showList()}
                </div>
                </div>
        )
    }
}



export default TalkShows;