import React from 'react';
import SongDetail from '../components/SongDetail.js';
import SongSelector from '../components/SongSelector.js';

class ChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      selectedSong: null,
      selectedSongIndex: null
    };
    this.handleSongSelected = this.handleSongSelected.bind(this);
  };

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((songs) => {
        this.setState({ songs: songs });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  handleSongSelected(index) {
    const selectedSong = this.state.songs.feed.entry[index];
    this.setState({ selectedSong: selectedSong });
    this.setState({ selectedSongIndex: index });
  };

  render() {
    return (
      <div>
        <h1>Itunes Chart</h1>
        <SongSelector
          songs={this.state.songs}
          onSongSelected={this.handleSongSelected}
        />
        <SongDetail
          selectedSong={this.state.selectedSong}
          selectedSongIndex={this.state.selectedSongIndex}
        />
      </div>
    )
  };
};

export default ChartContainer;
