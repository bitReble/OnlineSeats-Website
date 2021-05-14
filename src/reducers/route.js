import { ROUTES_FETCHED } from "../actions/types";

const initialState = [];
const routeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ROUTES_FETCHED:
      return [...payload];
    default:
      return state;
  }
};

export default routeReducer;
