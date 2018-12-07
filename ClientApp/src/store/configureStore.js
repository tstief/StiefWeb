import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import * as Counter from './Counter';
import * as WeatherForecasts from './WeatherForecasts';

export default function configureStore(history, initialState) {
  const middleware = [
    thunk,
    routerMiddleware(history),
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = combineReducers({
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer,
    router: connectRouter(history),
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers),
  );
}
