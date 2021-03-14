/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Categories from '../components/Categories';
import MealList from './MealList';

const Home = () => {
  const [state, setState] = useState('Beef');

  const handleCategoryChange = category => {
    setState(category);
  };

  console.log(state);
  return (
    <div>
      <Categories onCategoryChange={handleCategoryChange} />
      <MealList handleChange={handleCategoryChange} cat={state} />
    </div>
  );
};
export default Home;
