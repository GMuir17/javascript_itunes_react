import React from 'react';
import SongDetail from '../components/SongDetail.js';
import SongSelector from '../components/SongSelector.js';

class ChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      selectedSong: null
    };
  };

  render() {
    return (
      <div>
        <h1>Itunes Chart</h1>
        <SongSelector />
        <SongDetail />
      </div>
    )
  }
}

export default ChartContainer;
