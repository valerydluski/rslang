import { connect } from 'react-redux';
import Registration from '../../../pages/Auth/Registration';
import registerToServer from '../../../redux/Auth/Registration/actions';

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin,
  };
};

export default connect(mapStateToProps, { registerToServer })(Registration);
