import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const style = {
        width: '100%',
        height: '50%'
    } 
export class MapContainer extends React.Component {

  render() {
    return (
        
      <Map 
      google={this.props.google} 
      style={style}
      initialCenter={{lat:33.788372, lng: -84.116651}}
      zoom={14}
      >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            
        </InfoWindow>
      </Map>      

    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("API-KEY")
})(MapContainer)