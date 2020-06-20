import { connect } from 'react-redux';
import Login from '../../../pages/Auth/Login';
import { authToServer, checkStatusSession } from '../../../redux/Auth/Login/actions';

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin,
  };
};

export default connect(mapStateToProps, { authToServer, checkStatusSession })(Login);
