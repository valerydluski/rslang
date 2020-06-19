import { connect } from 'react-redux';
import Registration from '../../../components/Auth/Registration/Registration';
import registerToServer from '../../../redux/Auth/Registration/actions';

export default connect(null, { registerToServer })(Registration);
