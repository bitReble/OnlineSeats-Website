import { REGISTER_FAIL, REGISTER_SUCCESS } from "../actions/types";

const initalState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
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
    default:
      return state;
  }
};

export default authReducer;
