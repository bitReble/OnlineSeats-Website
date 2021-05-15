import {
  BUSTYPES_FETCHED,
  BUSTYPE_CREATED,
  BUSTYPE_DELETED,
} from "../actions/types";

const initialState = { busTypes: [] };
const busReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BUSTYPES_FETCHED:
      return { ...state, busTypes: [...payload] };
    case BUSTYPE_CREATED:
      return { ...state, busTypes: [...state.busTypes, payload] };
    case BUSTYPE_DELETED:
      return {
        ...state,
        busTypes: state.busTypes.filter((busType) => {
          return busType._id !== payload._id;
        }),
      };
    default:
      return state;
  }
};

export default busReducer;
