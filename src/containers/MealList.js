import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  Grid, Image, Card, Container,
} from 'semantic-ui-react';
import { fetchMealsStartAsync } from '../actions/getMeals';

const MealList = ({ cat }) => {
  const meals = useSelector(state => state.meals.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMealsStartAsync(cat));
  }, [cat]);

  return (
    <Container textAlign="center">
      <Grid columns={3}>
        <Grid.Row>
          {meals.map(meal => (
            <Grid.Column key={meal.strMeal} style={{ marginTop: 20 }}>
              <Card>
                <Image src={meal.strMealThumb} />
                <Card.Content>
                  <Card.Description>
                    {meal.strMeal}
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  );
};

MealList.propTypes = {
  cat: PropTypes.objectOf(PropTypes.array),
};

MealList.defaultProps = {
  cat: [],
};
export default MealList;
