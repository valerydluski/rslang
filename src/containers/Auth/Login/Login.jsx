import { connect } from 'react-redux';
import Login from '../../../components/Auth/Login/Login';
import { authToServer } from '../../../redux/Auth/Login/actions';

export default connect(null, { authToServer })(Login);
