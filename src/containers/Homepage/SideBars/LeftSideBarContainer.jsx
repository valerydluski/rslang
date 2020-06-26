import { connect } from 'react-redux';
import LeftSideBar from '../../../components/HomePage/SideBars/LeftSideBar';
import { resetSessionData } from '../../../redux/Auth/Login/actions';

export default connect(null, { resetSessionData })(LeftSideBar);
