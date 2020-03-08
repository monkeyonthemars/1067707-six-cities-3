import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';
import rentalOffers from '../../src/mocks/offers-test.js';

const RENTAL_OFFERS_COUNT = 312;
const CITY_AMSTERDAM_COORDINATES = [52.38333, 4.9];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should titles be clicked`, () => {
  const rentalTitleClickHandler = jest.fn();

  const mainScreen = shallow(
      <Main
        cityCoordinates={CITY_AMSTERDAM_COORDINATES}
        rentalOffersCount={RENTAL_OFFERS_COUNT}
        rentalOffers={rentalOffers}
        onRentalTitleClick={rentalTitleClickHandler}
      />
  );

  const rentalTitles = mainScreen.find(`.place-card__name`);

  rentalTitles.forEach((title) => title.props().onClick());

  expect(rentalTitleClickHandler.mock.calls.length).toBe(rentalOffers.length);
});
