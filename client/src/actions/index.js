import Axios from "axios";

import {
  FETCH_BOOK_LIST_REQUEST,
  FETCH_BOOK_LIST_SUCCESS,
  FETCH_BOOK_LIST_FAIL
} from "./types";

export const fetchBooks = () => async dispatch => {
  dispatch({ type: FETCH_BOOK_LIST_REQUEST });
  try {
    const res = await Axios.get("/books");
    dispatch({ type: FETCH_BOOK_LIST_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCH_BOOK_LIST_FAIL, error: err });
  }
};
