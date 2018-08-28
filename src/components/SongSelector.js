import React from 'react';

const SongSelector = () => {
  return (
    <select
      id="song-selector"
      defaultValue="default"
    >
      <option disabled value="default">Pick a Song</option>
    </select>
  )
}

export default SongSelector;
