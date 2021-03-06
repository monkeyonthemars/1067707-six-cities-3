import React from 'react';
import {Router} from "react-router-dom";
import history from "../../src/history.js";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';
import mocks from '../../src/mocks/offers-test.js';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should titles be clicked`, () => {
  const rentalTitleClickHandler = jest.fn();

  const mainScreen = mount(
      <Router
        history={history}
      >
        <Main
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          cities={mocks.cities}
          email={mocks.email}
          currentCity={mocks.currentCity}
          currentOffers={mocks.rentalOffers}
          onRentalTitleClick={rentalTitleClickHandler}
          onFavoriteClick={() => {}}
          onCityClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        />
      </Router>
  );

  const rentalTitles = mainScreen.find(`.place-card__name`);
  rentalTitles.forEach((title) => title.props().onClick());

  expect(rentalTitleClickHandler.mock.calls.length).toBe(mocks.rentalOffers.length);
});
