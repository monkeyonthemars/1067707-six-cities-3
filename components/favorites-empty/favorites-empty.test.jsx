import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import FavoritesEmpty from './favorites-empty.jsx';
import mocks from '../../src/mocks/offers-test.js';
import {AuthorizationStatus} from '../../src/const.js';

it(`<FavoritesEmpty /> should render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <FavoritesEmpty
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          email={mocks.email}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
