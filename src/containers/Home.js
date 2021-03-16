/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import MealList from './MealList';
import { fetchIngredientsStartAsync } from '../actions/getIngredients';

const Home = () => {
  const [state, setState] = useState('Beef');
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  const handleCategoryChange = category => {
    setState(category);
  };

  const handleIdChange = id => {
    setState(id);
  };

  useEffect(() => {
    dispatch(fetchIngredientsStartAsync(id));
  }, []);

  console.log(state);
  return (
    <div>
      <Categories onCategoryChange={handleCategoryChange} />
      <MealList handleChange={handleCategoryChange} cat={state} />
    </div>
  );
};
export default Home;
