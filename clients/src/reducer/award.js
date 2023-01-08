import { FETCH_AWARD_SUCCESS } from "../actionType";

const initialState = { awards: [] };

export const awardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AWARD_SUCCESS:
      return {
        ...state,
        awards: action.payload,
      };

    default:
      return state;
  }
};
