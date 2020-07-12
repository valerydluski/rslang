import { connect } from 'react-redux';
import Statistics from '../../../components/HomePage/Content/Statistics/Statistics';
import { getAllWords } from '../../../redux/Chart/actions';

export default connect(null, { getAllWords })(Statistics);
