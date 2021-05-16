import axios from "axios";
import { setAlert } from "./alert";
import {
  LOGOUT,
  SCHEDULE_FETCHED,
  SCHEDULE_CREATED,
  SCHEDULE_UPDATED,
} from "./types";

export const getSchedules = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const now = new Date();
  const body = JSON.stringify({
    from: "Colombo",
    to: "Sammanthurai",
    date: now.setDate(now.getDate() + 1),
  });
  try {
    let res = await axios.post("schedule/get-schedule", body, config);
    console.log(res.data);
    dispatch({ type: SCHEDULE_FETCHED, payload: res.data });
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

export const updateSchedule =
  ({
    schedule_id,
    route,
    bus_type,
    from,
    to,
    departure,
    arrival,
    recurring,
    price,
  }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      schedule_id,
      route,
      bus_type,
      from,
      to,
      departure,
      arrival,
      recurring,
      price,
    });
    try {
      let res = await axios.put("schedule/update-schedule", body, config);
      console.log(res.data);
      dispatch({ type: SCHEDULE_UPDATED, payload: res.data });
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

export const createSchedule =
  ({
    route,
    bus_type,
    from: fromDO,
    to: toDO,
    departure,
    arrival,
    recurring,
    price,
  }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      route,
      bus_type,
      from: fromDO,
      to: toDO,
      departure,
      arrival,
      recurring,
      price,
    });
    try {
      let res = await axios.post("schedule/create-schedule", body, config);
      dispatch({ type: SCHEDULE_CREATED, payload: res.data });
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
