import { connect } from 'react-redux';
import Station from '../components/Station';
import { toggleSong, setCurrentSong } from "../action-creators/player";
import { convertSong } from '../utils'

console.log("Toggle one", toggleSong)
const mapStateToProps = (state, componentProps) => (
  {songs: state.songs.filter(song => song.genre === componentProps.params.genre).map(song => convertSong(song)),
  isPlaying: state.isPlaying,
  currentSong: state.currentSong
  }
);
const mapDispatchToProps = dispatch => (
  {
   toggleOne: (song, list) => dispatch(toggleSong(song, list)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Station);
