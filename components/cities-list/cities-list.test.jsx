import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list.jsx';
import mocks from '../../src/mocks/offers-test.js';

it(`<CitiesList /> render correctly`, () => {
  const tree = renderer.create(
      <CitiesList
        cities={mocks.cities}
        currentCity={mocks.currentCity}
        onCityClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
