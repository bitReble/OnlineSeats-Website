import {
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  TOKEN_LOADED,
} from "../actions/types";

const initalState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: null,
};

const authReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case REGISTER_FAIL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        payload,
        isAuthenticated: true,
      };
    case TOKEN_LOADED:
      return { ...state, ...payload, isAuthenticated: true };
    default:
      return state;
  }
};

export default authReducer;
