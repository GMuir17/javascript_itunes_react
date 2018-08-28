import React from 'react';

const SongDetail = (props) => {
  if (!props.selectedSong || !props.selectedSongIndex) return null;
  console.log("SONG: ", props.selectedSong);

  const chartPosition = parseInt(props.selectedSongIndex, 10) + 1;

  return (
    <div>
      <h3>At Position {chartPosition}:</h3>
      <p>Title - {props.selectedSong["im:name"].label}</p>
      <p>Artist - {props.selectedSong["im:artist"].label}</p>
      <img src={props.selectedSong["im:image"][2].label} alt="A music single cover"/>
    </div>
  );
}

export default SongDetail;
