import React from 'react';

const SongSelector = (props) => {
  if (!props.songs.feed) return null;
  console.log(props.songs.feed.entry[0]["im:name"].label);

  const options = props.songs.feed.entry.map((song, index) => {
    return <option value={index} key={index}>{song["im:name"].label}</option>
  })


  return (
    <select
      id="song-selector"
      defaultValue="default"
    >
      <option disabled value="default">Pick a Song</option>
      {options}
    </select>
  )
}

export default SongSelector;
