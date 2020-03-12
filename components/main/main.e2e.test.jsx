import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';
import mocks from '../../src/mocks/offers-test.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should titles be clicked`, () => {
  const rentalTitleClickHandler = jest.fn();
  const cityClickHandler = jest.fn();

  const mainScreen = shallow(
      <Main
        cities={mocks.cities}
        currentCity={mocks.currentCity}
        currentOffers={mocks.rentalOffers}
        onRentalTitleClick={rentalTitleClickHandler}
        onCityClick={cityClickHandler}
      />
  );

  const rentalTitles = mainScreen.find(`.place-card__name`);

  rentalTitles.forEach((title) => title.props().onClick());

  expect(rentalTitleClickHandler.mock.calls.length).toBe(mocks.rentalOffers.length);
});
