import React from 'react';

const SongDetail = (props) => {
  if (!props.selectedSong || !props.selectedSongIndex) return null;
  console.log("SONG: ", props.selectedSong);
  console.log("INDEX ", props.selectedSongIndex);

  const chartPosition = parseInt(props.selectedSongIndex, 10) + 1;

  return (
    <div>
      <h3>At Position {chartPosition}</h3>
    </div>
  );
}

export default SongDetail;
