import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  mobitelChartAreaReducer,
  mobitelChartColumnReducer,
  mobitelDatabseReducer,
  mobitelLastUpdateReducer,
  mobitelOverviewReducer,
  mobitelScopeReducer
} from './Reducers/mobitelReduce';

const reducer = combineReducers({
  mobitelOverview: mobitelOverviewReducer,
  mobitelChartColumn: mobitelChartColumnReducer,
  mobitelChartArea: mobitelChartAreaReducer,
  mobitelDatabse: mobitelDatabseReducer,
  mobitelScope: mobitelScopeReducer,
  mobitelLastUpdate: mobitelLastUpdateReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
