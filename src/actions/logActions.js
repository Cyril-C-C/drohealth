import { SET_LOADING, GET_LOGS, LOGS_ERROR, SEARCH_LOGS, SEARCH_CHARACTERS } from './types';

// Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/books')
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

// Using books endpoint
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/books?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: LOGS_ERROR, payload: err.response.statusText });
  }
};

// Using characters endpoint
export const searchCharacters = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/characters?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_CHARACTERS,
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
