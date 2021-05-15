import { SCHEDULE_FETCHED, SCHEDULE_CREATED } from "../actions/types";

const initialState = { schedules: [] };
const scheduleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SCHEDULE_FETCHED:
      return { ...state, schedules: [...payload] };
    case SCHEDULE_CREATED:
      return { ...state, schedules: [...state.schedules, payload] };
    default:
      return state;
  }
};

export default scheduleReducer;
