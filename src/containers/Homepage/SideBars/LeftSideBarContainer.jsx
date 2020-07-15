import { connect } from 'react-redux';
import LeftSideBar from '../../../components/HomePage/SideBars/LeftSideBar';
import { resetSessionData } from '../../../redux/Auth/Login/actions';
import resetStore from '../../../redux/resetStore/action';

export default connect(null, { resetSessionData, resetStore })(LeftSideBar);
