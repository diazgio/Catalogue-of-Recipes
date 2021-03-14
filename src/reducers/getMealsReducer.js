import { MealsActionTypes } from '../actions/actionTypes';

const INITIAL_STATE = {
  meals: [],
  isFetching: false,
  errorMessage: undefined,
};

const mealsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MealsActionTypes.FETCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case MealsActionTypes.FETCH_DATA_SUCCEESS:
      return {
        ...state,
        meals: action.meals,
        isFetching: false,
      };
    case MealsActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default mealsReducer;
