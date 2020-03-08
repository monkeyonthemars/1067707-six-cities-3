import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';
import rentalOffers from '../../src/mocks/offers-test.js';

const CITY_AMSTERDAM_COORDINATES = [52.38333, 4.9];

it(`<Map /> map render correctly`, () => {
  const tree = renderer.create(
      <Map
        cityCoordinates={CITY_AMSTERDAM_COORDINATES}
        rentalOffers={rentalOffers}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
