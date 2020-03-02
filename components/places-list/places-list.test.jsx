import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';
import placesList from '../../src/mocks/offers-test.js';

const RENTAL_OFFERS_COUNT = 312;
const rentalTitleClickHandler = () => {};

it(`<PlacesList /> should render correctly`, () => {
  const tree = renderer.create(
      <PlacesList
        rentalOffersCount={RENTAL_OFFERS_COUNT}
        placesList={placesList}
        onRentalTitleClick={rentalTitleClickHandler}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
