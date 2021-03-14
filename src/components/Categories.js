import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoriesStartAsync } from '../actions/getCategories';

const Categories = () => {
  const categories = useSelector(state => state.categories.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, []);

  return (
    <div>
      <select placeholder="Select your category">
        <option>Select Category</option>
        {categories.map(cat => (
          <option key={cat.idCategory}>
            {cat.strCategory}
          </option>
        ))}
      </select>

    </div>
  );
};

export default Categories;
