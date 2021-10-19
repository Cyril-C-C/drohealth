import {
  SET_LOADING,
  GET_LOGS,
  LOGS_ERROR,
  SEARCH_LOGS,
  SEARCH_CHARACTERS,
} from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

//eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case SEARCH_LOGS:
    case SEARCH_CHARACTERS:
      return {
        ...state,
        logs: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
