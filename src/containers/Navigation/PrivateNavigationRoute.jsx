import { connect } from 'react-redux';
import PrivateNavigationRoute from '../../components/Navigation/PrivateNavigationRoute';

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin,
  };
};

export default connect(mapStateToProps, null)(PrivateNavigationRoute);
