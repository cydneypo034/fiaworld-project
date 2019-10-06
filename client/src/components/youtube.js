import React from 'react';
import YouTube from 'react-youtube';
 
class YoutubeVid extends React.Component {
  render() {
    const opts = {
      height: '390px',
      width: '740px',
      
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        loop: 0
      }
      
    };
 
    return (
      <YouTube
        videoId="LambVbJmd4A"
        opts={opts}
        onReady={this._onReady}
        className="youtube-vid"
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YoutubeVid;