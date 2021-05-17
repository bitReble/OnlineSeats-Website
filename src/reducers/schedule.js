import {
  SCHEDULE_FETCHED,
  SCHEDULE_CREATED,
  SCHEDULE_UPDATED,
  SCHEDULE_DELETED,
  SINGLE_SCHEDULE_FETCHED,
  TICKET_RESERVED,
} from "../actions/types";

const initialState = { schedules: [], schedule: null };
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
    case SINGLE_SCHEDULE_FETCHED:
      return { ...state, schedule: payload, schedules: state.schedules };
    case SCHEDULE_CREATED:
      return { ...state, schedules: [...state.schedules, payload] };
    case TICKET_RESERVED:
      return {
        ...state,
        schedule: {
          ...state.schedule,
          route: state.schedule.route,
          bus_type: state.schedule.bus_type,
          tickets: state.schedule.tickets.map((ticket) => {
            if (ticket._id === payload._id) {
              return payload;
            }
            return ticket;
          }),
        },
      };
    default:
      return state;
  }
};

export default scheduleReducer;
