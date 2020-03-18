import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';
import mocks from '../../src/mocks/offers-test.js';

it(`<Map /> render correctly`, () => {
  const tree = renderer.create(
      <Map
        cityCoordinates={mocks.currentCity.coordinates}
        currentOffers={mocks.rentalOffers}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
