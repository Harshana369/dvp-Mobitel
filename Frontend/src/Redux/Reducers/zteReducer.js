import {
  ZTE_FILTERED_NAMES_REQUEST,
  ZTE_FILTERED_NAMES_SUCCESS,
  ZTE_FILTERED_NAMES_FAIL,
  ZTE_COLUMN_CHART_DATA_SUCCESS,
  ZTE_COLUMN_CHART_DATA_FAIL,
  ZTE_AREA_CHART_DATA_SUCCESS,
  ZTE_AREA_CHART_DATA_FAIL,
  ZTE_AREA_CHART_DATA_REQUEST,
  ZTE_DATABASE_REQUEST,
  ZTE_DATABASE_SUCCESS,
  ZTE_DATABASE_FAIL,
  ZTE_SCOPE_DATA_SUCCESS,
  ZTE_SCOPE_DATA_FAIL,
  ZTE_LAST_UPDATE_SUCCESS,
  ZTE_LAST_UPDATE_FAIL
} from '../Constants/zteconstants';

export const zteFiltedNameReducer = (state = { zteFiltedNameData: [] }, action) => {
  switch (action.type) {
    case ZTE_FILTERED_NAMES_REQUEST:
      return { loading: true, zteFiltedNameData: [] };
    case ZTE_FILTERED_NAMES_SUCCESS:
      return { loading: false, zteFiltedNameData: action.payload };
    case ZTE_FILTERED_NAMES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const zteColumChartReducer = (state = { zteColumChartData: [] }, action) => {
  switch (action.type) {
    case ZTE_COLUMN_CHART_DATA_REQUEST:
      return { loading: true, zteColumChartData: [] };
    case ZTE_COLUMN_CHART_DATA_SUCCESS:
      return { loading: false, zteColumChartData: action.payload };
    case ZTE_COLUMN_CHART_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const zteAreaChartReducer = (state = { zteAreaChartData: [] }, action) => {
  switch (action.type) {
    case ZTE_AREA_CHART_DATA_REQUEST:
      return { loading: true, zteAreaChartData: [] };
    case ZTE_AREA_CHART_DATA_SUCCESS:
      return { loading: false, zteAreaChartData: action.payload };
    case ZTE_AREA_CHART_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const zteDatabaseReducer = (state = { zteDatabaseData: [] }, action) => {
  switch (action.type) {
    case ZTE_DATABASE_REQUEST:
      return { loading: true, zteDatabaseData: [] };
    case ZTE_DATABASE_SUCCESS:
      return { loading: false, zteDatabaseData: action.payload };
    case ZTE_DATABASE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const zteScopeReducer = (state = { zteScopeData: [] }, action) => {
  switch (action.type) {
    case ZTE_SCOPE_DATA_REQUEST:
      return { loading: true, zteScopeData: [] };
    case ZTE_SCOPE_DATA_SUCCESS:
      return { loading: false, zteScopeData: action.payload };
    case ZTE_SCOPE_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const zteLastUpdateReducer = (state = { zteLastUpdateData: [] }, action) => {
  switch (action.type) {
    case ZTE_LAST_UPDATE_REQUEST:
      return { loading: true, zteLastUpdateData: [] };
    case ZTE_LAST_UPDATE_SUCCESS:
      return { loading: false, zteLastUpdateData: action.payload };
    case ZTE_LAST_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
