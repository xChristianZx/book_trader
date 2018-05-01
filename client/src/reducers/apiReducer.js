import {
  FETCH_BOOK_LIST_SUCCESS,
  FETCH_BOOK_LIST_REQUEST,
  FETCH_BOOK_LIST_FAIL
} from "../actions/types";

const initialState = { data: null, isFetching: false, error: false };

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOK_LIST_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_BOOK_LIST_SUCCESS:
      return { ...state, isFetching: false, data: action.payload };
    case FETCH_BOOK_LIST_FAIL:
      return { ...state, isFetching: false, error: true, data: action.error };
    default:
      return state;
  }
}
