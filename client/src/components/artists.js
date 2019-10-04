import React from 'react';

const oneArtist = (artist) => (
    <li>
    {artist.name} - {artist.biography}
    </li>
  )

const testArtist = {name: "Bernice", biography: "She is amazing!"}

class Artists extends React.Component {


    render() {
        return (
            <div className="about-text">
                {oneArtist(testArtist)}
            </div>
        )
    }

}

export default Artists;