import { connect } from 'react-redux';
import Station from '../components/Station';
import { toggleSong } from "../action-creators/player";

const mapStateToProps = (state, componentProps) => ({songs: state.songs.filter(song => song.genre === componentProps.params.genre)});
const mapDispatchToProps = dispatch => (
  {toggleOne: (song) => dispatch(toggleSong(song))}
);

export default connect(mapStateToProps, mapDispatchToProps)(Station);
