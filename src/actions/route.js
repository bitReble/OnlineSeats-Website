import axios from "axios";
import { setAlert } from "./alert";
import {
  ROUTES_FETCHED,
  ROUTE_CREATED,
  LOGOUT,
  ROUTE_DELETED,
  ROUTE_UPDATED,
} from "./types";

export const getRoutes = () => async (dispatch) => {
  try {
    let res = await axios.get("route/get-route");
    dispatch({ type: ROUTES_FETCHED, payload: res.data });
  } catch (err) {
    const errors = err.response.data.errors;
    if (err.response.status === 401) {
      dispatch({ type: LOGOUT });
    }
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.message, "danger")));
    }
  }
};

export const deleteRoute = (id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ route_id: id });
  try {
    let res = await axios.post("route/delete-route", body, config);
    dispatch({ type: ROUTE_DELETED, payload: { _id: id } });
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;
    if (err.response.status === 401) {
      dispatch({ type: LOGOUT });
    }
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.message, "danger")));
    }
  }
};

export const createRoute =
  ({ from, to }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ path: [from, to] });

    try {
      let res = await axios.post("route/create-route", body, config);
      dispatch({ type: ROUTE_CREATED, payload: res.data });
    } catch (err) {
      console.log(err);
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.message, "danger")));
      }
    }
  };

export const updateRoute =
  ({ id, from, to }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ route_id: id, path: [from, to] });

    try {
      let res = await axios.put("route/update-route", body, config);
      dispatch({ type: ROUTE_UPDATED, payload: res.data });
    } catch (err) {
      console.log(err);
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.message, "danger")));
      }
    }
  };
