import { connect } from 'react-redux';
import Registration from '../../../pages/Auth/Registration';
import registerToServer from '../../../redux/Auth/Registration/actions';

export default connect(null, { registerToServer })(Registration);
