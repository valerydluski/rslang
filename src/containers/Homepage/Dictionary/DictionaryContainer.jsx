import { connect } from 'react-redux';
import Dictionary from '../../../components/HomePage/Content/Dictionary/Dictionary';
import { getAggregatedWords } from '../../../redux/Dictionary/actions';

export default connect(null, { getAggregatedWords })(Dictionary);
