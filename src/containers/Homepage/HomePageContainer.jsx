import { connect } from 'react-redux';
import { checkStatusSession } from '../../redux/Auth/Login/actions';
import HomePage from '../../pages/homePage/HomePage';

export default connect(null, { checkStatusSession })(HomePage);
