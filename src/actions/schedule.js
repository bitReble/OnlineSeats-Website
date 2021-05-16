import axios from "axios";
import { setAlert } from "./alert";
import {
  LOGOUT,
  SCHEDULE_FETCHED,
  SCHEDULE_CREATED,
  SCHEDULE_UPDATED,
  SCHEDULE_DELETED,
  SINGLE_SCHEDULE_FETCHED,
} from "./types";

export const getSchedules = () => async (dispatch) => {
  try {
    let res = await axios.get("schedule/get-schedule");
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

export const searchSchedules =
  ({ from, to, date }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      from,
      to,
      date,
    });
    try {
      let res = await axios.post("schedule/search-schedule", body, config);
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
      dispatch({ type: SCHEDULE_UPDATED, payload: res.data });
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

export const deleteSchedule = (schedule_id) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    schedule_id,
  });
  try {
    await axios.post("schedule/delete-schedule", body, config);
    dispatch({ type: SCHEDULE_DELETED, payload: { _id: schedule_id } });
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

export const getSingleSchedule =
  ({ schedule_id, date }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      schedule_id,
      date,
    });
    try {
      let res = await axios.post("/schedule/get-single-schedule", body, config);
      dispatch({ type: SINGLE_SCHEDULE_FETCHED, payload: res.data });
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
