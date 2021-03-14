import axios from 'axios';
import CategoriesActionTypes from './actionTypes';

export const fetchCategoriesStart = () => ({
  type: CategoriesActionTypes.FETCH_DATA_START,
});

export const fetchCategoriesSuccess = categories => ({
  type: CategoriesActionTypes.FETCH_DATA_SUCCESS,
  categories,
});

export const fetchCategoriesFailure = error => ({
  type: CategoriesActionTypes.FETCH_DATA_FAILURE,
  error,
});

export const fetchCategoriesStartAsync = cat => dispatch => {
  dispatch(fetchCategoriesStart());
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${cat}`)
    .then(res => dispatch(fetchCategoriesSuccess(res.data)))
    .catch(error => dispatch(fetchCategoriesFailure(error)));
};
