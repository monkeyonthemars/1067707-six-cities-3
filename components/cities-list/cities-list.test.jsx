import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list.jsx';
import mocks from '../../src/mocks/offers-test.js';

const cityClickHandler = () => {};

it(`<CitiesList /> cities-list render correctly`, () => {
  const tree = renderer.create(
      <CitiesList
        cities={mocks.cities}
        currentCity={mocks.currentCity}
        onCityClick={cityClickHandler}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
