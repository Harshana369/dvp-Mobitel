import {
  MOBITEL_OVERVIEW_REQUEST,
  MOBITEL_OVERVIEW_SUCCESS,
  MOBITEL_OVERVIEW_FAIL,
  MOBITEL_CHART_COLUMN_DATA_REQUEST,
  MOBITEL_CHART_COLUMN_DATA_SUCCESS,
  MOBITEL_CHART_COLUMN_DATA_FAIL,
  MOBITEL_CHART_AREA_DATA_REQUEST,
  MOBITEL_CHART_AREA_DATA_SUCCESS,
  MOBITEL_CHART_AREA_DATA_FAIL,
  MOBITEL_DATABASE_REQUEST,
  MOBITEL_DATABASE_SUCCESS,
  MOBITEL_DATABASE_FAIL,
  MOBITEL_SCOPE_DATA_REQUEST,
  MOBITEL_SCOPE_DATA_SUCCESS,
  MOBITEL_SCOPE_DATA_FAIL,
  MOBITEL_LAST_UPDATE_REQUEST,
  MOBITEL_LAST_UPDATE_SUCCESS,
  MOBITEL_LAST_UPDATE_FAIL
} from '../Constants/mobitelConstants';

export const mobitelOverviewReducer = (state = { mobitelOverviewData: [] }, action) => {
  switch (action.type) {
    case MOBITEL_OVERVIEW_REQUEST:
      return { loading: true, mobitelOverviewData: [] };
    case MOBITEL_OVERVIEW_SUCCESS:
      return { loading: false, mobitelOverviewData: action.payload };
    case MOBITEL_OVERVIEW_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const mobitelChartColumnReducer = (state = { mobitelChartColumData: [] }, action) => {
  switch (action.type) {
    case MOBITEL_CHART_COLUMN_DATA_REQUEST:
      return { loading: true, mobitelChartColumData: [] };
    case MOBITEL_CHART_COLUMN_DATA_SUCCESS:
      return { loading: false, mobitelChartColumData: action.payload };
    case MOBITEL_CHART_COLUMN_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const mobitelChartAreaReducer = (state = { mobitelChartAreaData: [] }, action) => {
  switch (action.type) {
    case MOBITEL_CHART_AREA_DATA_REQUEST:
      return { loading: true, mobitelChartAreaData: [] };
    case MOBITEL_CHART_AREA_DATA_SUCCESS:
      return { loading: false, mobitelChartAreaData: action.payload };
    case MOBITEL_CHART_AREA_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const mobitelDatabseReducer = (state = { mobitelDatabaseData: [] }, action) => {
  switch (action.type) {
    case MOBITEL_DATABASE_REQUEST:
      return { loading: true, mobitelDatabaseData: [] };
    case MOBITEL_DATABASE_SUCCESS:
      return { loading: false, mobitelDatabaseData: action.payload };
    case MOBITEL_DATABASE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const mobitelScopeReducer = (state = { mobitelScopeData: [] }, action) => {
  switch (action.type) {
    case MOBITEL_SCOPE_DATA_REQUEST:
      return { loading: true, mobitelScopeData: [] };
    case MOBITEL_SCOPE_DATA_SUCCESS:
      return { loading: false, mobitelScopeData: action.payload };
    case MOBITEL_SCOPE_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const mobitelLastUpdateReducer = (state = { mobitelLastUpdateData: [] }, action) => {
  switch (action.type) {
    case MOBITEL_LAST_UPDATE_REQUEST:
      return { loading: true, mobitelLastUpdateData: [] };
    case MOBITEL_LAST_UPDATE_SUCCESS:
      return { loading: false, mobitelLastUpdateData: action.payload };
    case MOBITEL_LAST_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
