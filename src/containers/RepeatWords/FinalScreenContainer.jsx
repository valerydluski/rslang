import { connect } from 'react-redux';
import FinalScreen from '../../components/RepeatWords/FinalScreen';

const mapStateToProps = (state) => {
  return {
    isRepeatWordsLoaded: state.repeatWords.isRepeatWordsLoaded,
  };
};

export default connect(mapStateToProps, null)(FinalScreen);
