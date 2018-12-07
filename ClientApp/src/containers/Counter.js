import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';
import Counter from '../components/Counter';

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch),
)(Counter);
