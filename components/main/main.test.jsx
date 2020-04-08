import React from 'react';
import {Router} from 'react-router-dom';
import history from '../../src/history.js';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import mocks from '../../src/mocks/offers-test.js';
import {SortType} from '../../src/const.js';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

it(`<Main /> should render correctly`, () => {
  const tree = renderer.create(
      <Router
        history={history}
      >
        <Main
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          cities={mocks.cities}
          email={mocks.email}
          currentCity={mocks.currentCity}
          currentOffers={mocks.rentalOffers}
          onRentalTitleClick={() => {}}
          onFavoriteClick={() => {}}
          onCityClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          onSortTypeClick={() => {}}
          activePlaceCard={-1}
          isActiveMenu={false}
          onSortMenuClick={() => {}}
          currentSortType={SortType.POPULAR}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
