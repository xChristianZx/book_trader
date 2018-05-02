import Axios from "axios";

import {
  FETCH_BOOK_LIST_REQUEST,
  FETCH_BOOK_LIST_SUCCESS,
  FETCH_BOOK_LIST_FAIL,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAIL
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

export const addBook = newBook => async dispatch => {
  dispatch({ type: ADD_BOOK_REQUEST });
  try {
    const res = await Axios.post("books/add", newBook);
    dispatch({ type: ADD_BOOK_SUCCESS, payload: res.data });
    console.log("SUCCESS", res);
  } catch (err) {
    dispatch({ type: ADD_BOOK_FAIL, error: err });
    console.log("ERROR", err);
  }
};
