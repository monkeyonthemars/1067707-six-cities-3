import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import mocks from '../../src/mocks/offers-test.js';

it(`<Main /> should render correctly`, () => {
  const tree = renderer.create(
      <Main
        cities={mocks.cities}
        currentCity={mocks.currentCity}
        currentOffers={mocks.rentalOffers}
        onRentalTitleClick={() => {}}
        onCityClick={() => {}}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
