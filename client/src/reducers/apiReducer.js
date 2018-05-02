import {
  FETCH_BOOK_LIST_SUCCESS,
  FETCH_BOOK_LIST_REQUEST,
  FETCH_BOOK_LIST_FAIL,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  ADD_BOOK_FAIL
} from "../actions/types";

const initialState = {
  data: null,
  isFetching: false,
  error: false,
  message: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOK_LIST_REQUEST:
    case ADD_BOOK_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_BOOK_LIST_SUCCESS:
      return { ...state, isFetching: false, data: action.payload };
    case ADD_BOOK_SUCCESS:
      return { ...state, isFetching: false, message: action.payload };
    case FETCH_BOOK_LIST_FAIL:
    case ADD_BOOK_FAIL:
      return {
        ...state,
        isFetching: false,
        error: true,
        message: action.error
      };
    default:
      return state;
  }
}
