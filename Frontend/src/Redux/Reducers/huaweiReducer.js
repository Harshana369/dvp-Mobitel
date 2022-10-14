import {
  HUAWEI_FILTERED_NAMES_REQUEST,
  HUAWEI_FILTERED_NAMES_SUCCESS,
  HUAWEI_FILTERED_NAMES_FAIL,
  HUAWEI_COLUMN_CHART_DATA_REQUEST,
  HUAWEI_COLUMN_CHART_DATA_SUCCESS,
  HUAWEI_COLUMN_CHART_DATA_FAIL,
  HUAWEI_AREA_CHART_DATA_FAIL,
  HUAWEI_DATABASE_SUCCESS,
  HUAWEI_DATABASE_FAIL,
  HUAWEI_SCOPE_DATA_SUCCESS,
  HUAWEI_SCOPE_DATA_FAIL,
  HUAWEI_LAST_UPDATE_SUCCESS,
  HUAWEI_LAST_UPDATE_FAIL
} from '../Constants/haweiConstants';

export const huaweiFiltedNameReducer = (state = { huaweiFiltedNameData: [] }, action) => {
  switch (action.type) {
    case HUAWEI_FILTERED_NAMES_REQUEST:
      return { loading: true, huaweiFiltedNameData: [] };
    case HUAWEI_FILTERED_NAMES_SUCCESS:
      return { loading: false, huaweiFiltedNameData: action.payload };
    case HUAWEI_FILTERED_NAMES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const huaweiColumChartReducer = (state = { huaweiColumChartData: [] }, action) => {
  switch (action.type) {
    case HUAWEI_COLUMN_CHART_DATA_REQUEST:
      return { loading: true, huaweiColumChartData: [] };
    case HUAWEI_COLUMN_CHART_DATA_SUCCESS:
      return { loading: false, huaweiColumChartData: action.payload };
    case HUAWEI_COLUMN_CHART_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const huaweiAreaChartReducer = (state = { huaweiAreaChartData: [] }, action) => {
  switch (action.type) {
    case HUAWEI_AREA_CHART_DATA_REQUEST:
      return { loading: true, huaweiAreaChartData: [] };
    case HUAWEI_AREA_CHART_DATA_SUCCESS:
      return { loading: false, huaweiAreaChartData: action.payload };
    case HUAWEI_AREA_CHART_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const huaweiDatabaseReducer = (state = { huaweiDatabaseData: [] }, action) => {
  switch (action.type) {
    case HUAWEI_DATABASE_REQUEST:
      return { loading: true, huaweiDatabaseData: [] };
    case HUAWEI_DATABASE_SUCCESS:
      return { loading: false, huaweiDatabaseData: action.payload };
    case HUAWEI_DATABASE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const huaweiScopeReducer = (state = { huaweiScopeData: [] }, action) => {
  switch (action.type) {
    case HUAWEI_SCOPE_DATA_REQUEST:
      return { loading: true, huaweiScopeData: [] };
    case HUAWEI_SCOPE_DATA_SUCCESS:
      return { loading: false, huaweiScopeData: action.payload };
    case HUAWEI_SCOPE_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const huaweiLastUpdateReducer = (state = { huaweiLastUpdateData: [] }, action) => {
  switch (action.type) {
    case HUAWEI_LAST_UPDATE_REQUEST:
      return { loading: true, huaweiLastUpdateData: [] };
    case HUAWEI_LAST_UPDATE_SUCCESS:
      return { loading: false, huaweiLastUpdateData: action.payload };
    case HUAWEI_LAST_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
