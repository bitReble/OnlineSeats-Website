import {
  ROUTES_FETCHED,
  ROUTE_CREATED,
  ROUTE_DELETED,
  ROUTE_UPDATED,
} from "../actions/types";

const initialState = { routes: [] };
const routeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ROUTES_FETCHED:
      return { ...state, routes: [...payload] };
    case ROUTE_CREATED:
      return { ...state, routes: [...state.routes, payload] };
    case ROUTE_DELETED:
      return {
        ...state,
        routes: state.routes.filter((route) => {
          return route._id !== payload._id;
        }),
      };
    case ROUTE_UPDATED:
      return {
        ...state,
        routes: state.routes.map((route) => {
          if (route._id === payload._id) {
            return payload;
          }
          return route;
        }),
      };
    default:
      return state;
  }
};

export default routeReducer;
