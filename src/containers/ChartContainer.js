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

  render() {
    return (
      <div>
        <h1>Itunes Chart</h1>
        <SongSelector
          songs={this.state.songs}
        />
        <SongDetail />
      </div>
    )
  };
};

export default ChartContainer;
