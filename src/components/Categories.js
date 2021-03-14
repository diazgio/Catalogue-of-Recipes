/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoriesStartAsync } from '../actions/getCategories';

const Categories = () => {
  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync('chicken_breast'));
  }, []);

  return (
    <>
      <div>
        {categories.map(cat => (
          // eslint-disable-next-line react/jsx-key
          <h3>{cat.strMeal}</h3>
        ))}
      </div>
    </>
  );
};

export default Categories;
