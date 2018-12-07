import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const Counter = ({ count, increment }) => (
  <div>
    <h1>Counter</h1>

    <p>This is a simple example of a React component.</p>

    <p>
      Current count:
      <strong>{count}</strong>
    </p>

    <button
      className="btn btn-primary"
      onClick={increment}
      type="button"
    >
      Increment
    </button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

export default connect(
  state => state.counter,
  dispatch => bindActionCreators(actionCreators, dispatch),
)(Counter);
