import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';
import mocks from '../../src/mocks/offers-test.js';

describe(`Render App`, () => {
  it(`<App /> should render correctly`, () => {
    const tree = renderer.create(
        <App
          cities={mocks.cities}
          currentCity={mocks.currentCity}
          currentOffers={mocks.rentalOffers}
          onRentalTitleClick={() => {}}
          onCityClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
