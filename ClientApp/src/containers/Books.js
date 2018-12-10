import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Books from '../components/Books';
import { actionCreators } from '../store/Books';

export default connect(
  state => state.bookCatalog,
  dispatch => bindActionCreators(actionCreators, dispatch),
)(Books);
