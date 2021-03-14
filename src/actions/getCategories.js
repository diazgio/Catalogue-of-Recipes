import axios from 'axios';
import CategoriesActionTypes from './actionTypes';

export const fetchCategoriesStart = () => ({
  type: CategoriesActionTypes.FETCH_DATA_START,
});

export const fetchCategoriesSuccess = categories => ({
  type: CategoriesActionTypes.FETCH_DATA_SUCCEESS,
  categories,
});

export const fetchCategoriesFailure = error => ({
  type: CategoriesActionTypes.FETCH_DATA_FAILURE,
  error,
});

// eslint-disable-next-line arrow-body-style
export const fetchCategoriesStartAsync = cat => {
  return dispatch => {
    dispatch(fetchCategoriesStart());
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
      .then(res => dispatch(fetchCategoriesSuccess(res.data.meals)))
      .catch(error => dispatch(fetchCategoriesFailure(error)));
  };
};
