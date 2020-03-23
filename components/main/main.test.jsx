import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import mocks from '../../src/mocks/offers-test.js';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

it(`<Main /> should render correctly`, () => {
  const tree = renderer.create(
      <Main
        authorizationStatus={AuthorizationStatus.NO_AUTH}
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
