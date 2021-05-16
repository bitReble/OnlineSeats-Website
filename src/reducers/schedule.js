import {
  SCHEDULE_FETCHED,
  SCHEDULE_CREATED,
  SCHEDULE_UPDATED,
  SCHEDULE_DELETED,
} from "../actions/types";

const initialState = { schedules: [] };
const scheduleReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SCHEDULE_FETCHED:
      return { ...state, schedules: [...payload] };
    case SCHEDULE_UPDATED:
      return {
        ...state,
        schedules: state.schedules.map((schedule) => {
          if (schedule._id === payload._id) {
            return payload;
          }
          return schedule;
        }),
      };
    case SCHEDULE_DELETED:
      return {
        ...state,
        schedules: state.schedules.filter((schedule) => {
          return schedule._id !== payload._id;
        }),
      };
    case SCHEDULE_CREATED:
      return { ...state, schedules: [...state.schedules, payload] };
    default:
      return state;
  }
};

export default scheduleReducer;
