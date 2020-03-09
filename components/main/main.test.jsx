import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import rentalOffers from '../../src/mocks/offers-test.js';

const RENTAL_OFFERS_COUNT = 312;
const CITY_AMSTERDAM_COORDINATES = [52.38333, 4.9];
const rentalTitleClickHandler = () => {};

it(`<Main /> should render correctly`, () => {
  const tree = renderer.create(
      <Main
        cityCoordinates={CITY_AMSTERDAM_COORDINATES}
        rentalOffersCount={RENTAL_OFFERS_COUNT}
        rentalOffers={rentalOffers}
        onRentalTitleClick={rentalTitleClickHandler}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
