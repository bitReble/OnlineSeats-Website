import { ROUTES_FETCHED, ROUTE_CREATED, ROUTE_DELETED } from "../actions/types";

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
          return route._id != payload._id;
        }),
      };
    default:
      return state;
  }
};

export default routeReducer;
