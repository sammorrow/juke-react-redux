import React from 'react';
import Songs from './Songs';



export default function (props) {
    console.log("Received props:", props)
    return (
    <div>
      <h3>{ props.songs.length && props.songs[0].genre } Station</h3>
      <Songs
        songs={props.songs}
        currentSong={props.currentSong}
        isPlaying={props.isPlaying}
        toggleOne={props.toggleOne}
      />
    </div>
  );
}
