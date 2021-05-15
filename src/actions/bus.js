import axios from "axios";
import { setAlert } from "./alert";
import { BUSTYPES_FETCHED, BUSTYPE_CREATED, LOGOUT } from "./types";

export const getBusTypes = () => async (dispatch) => {
  try {
    let res = await axios.get("bus/get-bus-type");
    dispatch({ type: BUSTYPES_FETCHED, payload: res.data });
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

export const createBusTypes =
  ({ name, number_of_seats, left, right }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ name, number_of_seats, left, right });
    try {
      let res = await axios.post("bus/create-bus-type", body, config);
      dispatch({ type: BUSTYPE_CREATED, payload: res.data });
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
