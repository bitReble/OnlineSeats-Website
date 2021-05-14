import axios from "axios";
import { setAlert } from "./alert";
import { ROUTES_FETCHED } from "./types";

export const getRoutes = () => async (dispatch) => {
  try {
    let res = await axios.get("route/get-route");
    dispatch({ type: ROUTES_FETCHED, payload: res.data });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.message, "danger")));
    }
  }
};
