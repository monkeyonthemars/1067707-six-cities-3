import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Favorites from './favorites.jsx';
import mocks from '../../src/mocks/offers-test.js';
import {AuthorizationStatus} from '../../src/const.js';

it(`<Favorites /> should render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <Favorites
          favorites={mocks.rentalOffers}
          onRentalTitleClick={() => {}}
          onFavoriteClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          email={mocks.email}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});