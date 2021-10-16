import { SET_LOADING, GET_LOGS, LOGS_ERROR, SEARCH_LOGS } from './types';

// Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/books');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
  }
};

// Search server logs
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await Promise.all([
      fetch(`/books?q=${text}`),
      fetch(`/characters?q=${text}`),
    ]);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
  }
};

//Set loading to true
const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
