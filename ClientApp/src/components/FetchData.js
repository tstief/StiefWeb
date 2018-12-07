import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store/WeatherForecasts';

function renderForecastsTable(forecasts) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {forecasts.map(forecast => (
          <tr key={forecast.dateFormatted}>
            <td>{forecast.dateFormatted}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function renderPagination(startDateIndex, isLoading) {
  const prevStartDateIndex = (startDateIndex || 0) - 5;
  const nextStartDateIndex = (startDateIndex || 0) + 5;

  return (
    <p className="clearfix text-center">
      <Link className="btn btn-default pull-left" to={`/fetch-data/${prevStartDateIndex}`}>Previous</Link>
      <Link className="btn btn-default pull-right" to={`/fetch-data/${nextStartDateIndex}`}>Next</Link>
      {isLoading ? <span>Loading...</span> : []}
    </p>
  );
}

class FetchData extends Component {
  componentDidMount() {
    // This method is called when the component is first added to the document
    this.ensureDataFetched();
  }

  componentDidUpdate() {
    // This method is called when the route parameters change
    this.ensureDataFetched();
  }

  ensureDataFetched() {
    const { match, requestWeatherForecasts } = this.props;
    const startDateIndex = parseInt(match.params.startDateIndex, 10) || 0;
    requestWeatherForecasts(startDateIndex);
  }

  render() {
    const { startDateIndex, isLoading, forecasts } = this.props;
    return (
      <div>
        <h1>Weather forecast</h1>
        <p>
          This component demonstrates fetching data from the
          server and working with URL parameters.
        </p>
        {renderForecastsTable(forecasts)}
        {renderPagination(startDateIndex, isLoading)}
      </div>
    );
  }
}

FetchData.defaultProps = {
  startDateIndex: null,
};

FetchData.propTypes = {
  startDateIndex: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  forecasts: PropTypes.arrayOf(PropTypes.shape({
    dateFormatted: PropTypes.string.isRequired,
    temperatureC: PropTypes.number.isRequired,
    temperatureF: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
  })).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      startDateIndex: PropTypes.number,
    }).isRequired,
  }).isRequired,
  requestWeatherForecasts: PropTypes.func.isRequired,
};

export default connect(
  state => state.weatherForecasts,
  dispatch => bindActionCreators(actionCreators, dispatch),
)(FetchData);
