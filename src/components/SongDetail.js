import React from 'react';

const SongDetail = (props) => {
  if (!props.selectedSong || !props.selectedSongIndex) return null;
  console.log("SONG: ", props.selectedSong);

  const chartPosition = parseInt(props.selectedSongIndex, 10) + 1;

  return (
    <div>
      <h3>At Position {chartPosition}</h3>
      <h4>Title - {props.selectedSong["im:name"].label}</h4>
      <h4>Artist - {props.selectedSong["im:artist"].label}</h4>
    </div>
  );
}

export default SongDetail;
