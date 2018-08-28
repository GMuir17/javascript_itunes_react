import React from 'react';

const SongSelector = (props) => {
  if (!props.songs.feed) return null;

  const options = props.songs.feed.entry.map((song, index) => {
    return <option value={index} key={index}>{song["im:name"].label}</option>
  })

  function handleChange(evt) {
    props.onSongSelected(evt.target.value);
  }

  return (
    <select
      id="song-selector"
      defaultValue="default"
      onChange={handleChange}
    >
      <option disabled value="default">Pick a Song</option>
      {options}
    </select>
  )
}

export default SongSelector;
