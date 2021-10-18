import { SET_LOADING, GET_LOGS, LOGS_ERROR, SEARCH_LOGS } from './types';
import Paginate from './../utils/Paginate';

// Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await Promise.all(
      [
        fetch('/books').then((response) => response.json()),
        fetch('/characters?page=1&pageSize=10').then((response) =>
          response.json()
        ),
      ].map((promise) => promise.catch((error) => error))
    );
    const [data, setData] = await res.json();

    // For infinite loading (Pagination)

    setData(Paginate(data));

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

    const res = await Promise.all(
      [
        fetch(`/books?q=${text}`).then((response) => response.json()),
        fetch(`/characters?q=${text}`).then((response) => response.json()),
      ].map((promise) => promise.catch((error) => error))
    );
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
