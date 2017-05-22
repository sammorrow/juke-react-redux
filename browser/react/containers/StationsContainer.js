import { connect } from 'react-redux';
import Stations from '../components/Stations';

const convertSongsToStations = function (songsArray) {
  const stations = {};
  songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });

  return stations;
};

const mapStateToProps = state => ({stations: convertSongsToStations(state.songs)});
const mapDispatchToProps = dispatch => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Stations);
