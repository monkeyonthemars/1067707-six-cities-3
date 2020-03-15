import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from './places-list.jsx';
import mocks from '../../src/mocks/offers-test.js';

it(`<PlacesList /> should render correctly`, () => {
  const tree = renderer.create(
      <PlacesList
        rentalOffersCount={mocks.rentalOffers.length}
        placesList={mocks.rentalOffers}
        onRentalTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
