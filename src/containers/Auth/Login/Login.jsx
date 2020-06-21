import { connect } from 'react-redux';
import Login from '../../../pages/Auth/Login';
import { authToServer, checkStatusSession } from '../../../redux/Auth/Login/actions';

export default connect(null, { authToServer, checkStatusSession })(Login);
