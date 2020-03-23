import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import mocks from '../../src/mocks/offers-test.js';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

describe(`Render App`, () => {
  it(`<App /> should render correctly`, () => {
    const tree = renderer.create(
        <App
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          login={() => {}}
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
});
