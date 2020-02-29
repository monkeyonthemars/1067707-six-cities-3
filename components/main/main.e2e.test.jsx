import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

const RENTAL_OFFERS_COUNT = 312;
const rentalOffers = [
  {title: `Beautiful & luxurious apartment at great location`},
  {title: `Wood and stone place`},
  {title: `Canal View Prinsengracht`},
  {title: `Nice, cozy, warm big bed apartment`}
];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should titles be clicked`, () => {
  const rentalTitleClickHandler = jest.fn();

  const mainScreen = shallow(
      <Main
        rentalOffersCount={RENTAL_OFFERS_COUNT}
        rentalOffers={rentalOffers}
        onRentalTitleClick={rentalTitleClickHandler}
      />
  );

  const rentalTitles = mainScreen.find(`.place-card__name`);

  rentalTitles.forEach((title) => title.props().onClick());

  expect(rentalTitleClickHandler.mock.calls.length).toBe(rentalOffers.length);
});
