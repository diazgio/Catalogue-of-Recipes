/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable quotes */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Loader, Table, Header, Container, Segment, Image,
} from 'semantic-ui-react';
import { fetchIngredientsStartAsync } from '../actions/getIngredients';

const IngredientsList = () => {
  const ingredients = useSelector(state => state.ingredients.ingredients);
  const dispatch = useDispatch();

  const { pathname } = window.location;

  const id = pathname.split('/ingredients/')[1];

  useEffect(() => {
    dispatch(fetchIngredientsStartAsync(id));
  }, []);

  if (!ingredients) {
    return <Loader active inline="centered" />;
  }

  const keys = Object.values(ingredients)[0];
  const strIngredient = [];
  const i = Object.keys(keys).forEach(i => {
    if (i.includes('strIngredient')) {
      strIngredient.push(keys[i]);
    }
  });

  const strMeasure = [];
  const m = Object.keys(keys).forEach(i => {
    if (i.includes('strMeasure')) {
      strMeasure.push(keys[i]);
    }
  });

  return (
    // eslint-disable-next-line no-undef
    <Container style={{ display: 'flex' }}>
      {ingredients.map(i => (
        <Segment key={i.idMeal}>
          <p>
            Category:
            {' '}
            {i.strCategory}
          </p>
          <h2>{i.strMeal}</h2>
          <Image src={i.strMealThumb} size="medium" centered />
          <Container style={{ margin: 30 }}>
            <Table basic="very" celled style={{ margin: 'auto' }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Ingredient</Table.HeaderCell>
                  <Table.HeaderCell>Measure</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    {strIngredient.map(i => (
                      <Header as="h4" key={`${i}_${Math.random() * 100}`}>
                        {i}
                      </Header>
                    ))}
                  </Table.Cell>
                  <Table.Cell style={{ paddingTop: 30 }}>
                    {strMeasure.map(m => (
                      <Header as="h4" key={`${m}_${Math.random() * 100}`}>
                        {m}
                      </Header>
                    ))}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Container>
          <p>
            {i.strInstructions}
          </p>
        </Segment>
      ))}
    </Container>
  );
};

export default IngredientsList;
