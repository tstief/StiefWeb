const requestWeatherForecastsType = 'REQUEST_WEATHER_FORECASTS';
const receiveWeatherForecastsType = 'RECEIVE_WEATHER_FORECASTS';
const initialState = { forecasts: [], isLoading: false };

export const actionCreators = {
  requestWeatherForecasts: startDateIndex => async (dispatch, getState) => {
    const currentState = getState().weatherForecasts;
    console.log(currentState);
    if (startDateIndex === currentState.startDateIndex) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }

    dispatch({ type: requestWeatherForecastsType, startDateIndex });

    const url = `api/SampleData/WeatherForecasts?startDateIndex=${startDateIndex}`;
    const response = await fetch(url);
    const forecasts = await response.json();

    dispatch({ type: receiveWeatherForecastsType, startDateIndex, forecasts });
  },
};

export const reducer = (state, action) => {
  const newState = state || initialState;

  if (action.type === requestWeatherForecastsType) {
    return {
      ...newState,
      startDateIndex: action.startDateIndex,
      isLoading: true,
    };
  }

  if (action.type === receiveWeatherForecastsType) {
    return {
      ...newState,
      startDateIndex: action.startDateIndex,
      forecasts: action.forecasts,
      isLoading: false,
    };
  }

  return newState;
};
