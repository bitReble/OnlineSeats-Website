import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  TOKEN_LOADED,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "../util/setAuthToken";

// Register user
export const register =
  ({ userName: name, email, password, userCategory }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password });
    try {
      let res;
      if (userCategory === "operator") {
        res = await axios.post("auth/operator/signup", body, config);
      } else if (userCategory === "passenger") {
        res = await axios.post("auth/passenger/signup", body, config);
      }
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      dispatch(setAlert(res.data.message, "success"));
      // dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.message, "danger")));
      }
      dispatch({ type: REGISTER_FAIL });
    }
  };

// Login user
export const login =
  ({ email, password, userCategory }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });
    try {
      let res;
      if (userCategory === "operator") {
        res = await axios.post("auth/operator/signin", body, config);
      } else {
        dispatch(setAlert("Still in construction!", "danger"));
      }
      console.log({ loginResponse: res });
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      dispatch(setAlert(res.data.message, "success"));
      // dispatch(loadUser());
    } catch (err) {
      const errors = err?.response?.data?.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.message, "danger")));
      }
      dispatch({ type: LOGIN_FAIL });
    }
  };

// Logout and clear profile
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
    dispatch({ type: TOKEN_LOADED, payload: { token: localStorage.token } });
  }
};
