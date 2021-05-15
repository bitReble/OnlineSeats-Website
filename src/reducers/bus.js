import {
  BUSTYPES_FETCHED,
  BUSTYPE_CREATED,
  BUSTYPE_DELETED,
  BUSTYPE_UPDATED,
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
    case BUSTYPE_UPDATED:
      return {
        ...state,
        busTypes: state.busTypes.map((busType) => {
          if (busType._id === payload._id) {
            return payload;
          }
          return busType;
        }),
      };
    default:
      return state;
  }
};

export default busReducer;
