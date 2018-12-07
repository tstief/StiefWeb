import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FetchData from '../components/FetchData';
import { actionCreators } from '../store/WeatherForecasts';

export default connect(
  state => state.weatherForecasts,
  dispatch => bindActionCreators(actionCreators, dispatch),
)(FetchData);
