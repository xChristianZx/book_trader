import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL
} from "../actions/types";

const initialState = {
  error: false,
  isFetching: false,
  isLoggedIn: false,
  msg: null,
  userInfo: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
    case LOGOUT_USER_REQUEST:
    case UPDATE_USER_REQUEST:
      return { ...state, isFetching: true, error: false, msg: null };
    case LOGIN_USER_SUCCESS:
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        userInfo: action.payload
      };
    case LOGIN_USER_FAIL:
    case LOGOUT_USER_FAIL:
    case UPDATE_USER_FAIL:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: false,
        error: true,
        msg: action.error
      };
    case LOGOUT_USER_SUCCESS:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
