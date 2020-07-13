import { connect } from 'react-redux';
import FinalScreen from '../../components/RepeatWords/FinalScreen';

const mapStateToProps = (state) => {
  return {
    isMoreCardsToday: state.repeatWords.isMoreCardsToday,
  };
};

export default connect(mapStateToProps, null)(FinalScreen);
