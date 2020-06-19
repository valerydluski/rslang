import { connect } from 'react-redux';
import Auth from '../../components/Auth/Auth';
import { authToServer } from '../../redux/Auth/Login/actions';

export default connect(null, { authToServer })(Auth);
