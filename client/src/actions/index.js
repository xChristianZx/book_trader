import Axios from "axios";

import {
  FETCH_BOOK_LIST_REQUEST,
  FETCH_BOOK_LIST_SUCCESS,
  FETCH_BOOK_LIST_FAIL,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAIL,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL
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
  } catch (err) {
    dispatch({ type: ADD_BOOK_FAIL, error: err });
  }
};

export const fetchUser = () => async dispatch => {
  dispatch({ type: LOGIN_USER_REQUEST });
  try {
    const res = await Axios.get("/checkAuth");
    // console.log("LOGIN_USER_SUCCESS", res);
    dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
  } catch (error) {
    // console.log("LOGIN_USER_ERROR", error);
    dispatch({ type: LOGIN_USER_FAIL, error });
  }
};

export const userLogout = () => async dispatch => {
  dispatch({ type: LOGOUT_USER_REQUEST });
  try {
    const res = await Axios.get("/logout");
    // console.log("LOGOUT_USER_SUCCESS", res);
    dispatch({ type: LOGOUT_USER_SUCCESS });
  } catch (error) {
    // console.log("LOGOUT_USER_FAIL", error);
    dispatch({ type: LOGOUT_USER_FAIL, error });
  }
};
