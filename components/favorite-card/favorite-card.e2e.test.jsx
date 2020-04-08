import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FavoriteCard from './favorite-card.jsx';
import mocks from '../../src/mocks/offers-test.js';

const rentalOffer = mocks.rentalOffers[0];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Handler should get data on hover`, () => {
  const mouseEnterHandler = jest.fn();

  const favoriteCard = shallow(
      <FavoriteCard
        id={rentalOffer.id}
        mark={rentalOffer.mark}
        image={rentalOffer.image}
        priceValue={rentalOffer.priceValue}
        priceText={rentalOffer.priceText}
        isBookmark={rentalOffer.isBookmark}
        rating={rentalOffer.rating}
        title={rentalOffer.title}
        type={rentalOffer.type}
        onRentalTitleClick={() => {}}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={() => {}}
      />
  );

  favoriteCard.find(`.favorites__card`).props().onMouseEnter();
  expect(mouseEnterHandler.mock.calls.length).toBe(1);
});

it(`Handler should get data on mouse leave`, () => {
  const mouseLeaveHandler = jest.fn();

  const favoriteCard = shallow(
      <FavoriteCard
        id={rentalOffer.id}
        mark={rentalOffer.mark}
        image={rentalOffer.image}
        priceValue={rentalOffer.priceValue}
        priceText={rentalOffer.priceText}
        isBookmark={rentalOffer.isBookmark}
        rating={rentalOffer.rating}
        title={rentalOffer.title}
        type={rentalOffer.type}
        onRentalTitleClick={() => {}}
        onMouseEnter={() => {}}
        onMouseLeave={mouseLeaveHandler}
      />
  );

  favoriteCard.find(`.favorites__card`).props().onMouseLeave();
  expect(mouseLeaveHandler.mock.calls.length).toBe(1);
});

it(`Handler should get data on click`, () => {
  const rentalTitleClickHandler = jest.fn();

  const favoriteCard = shallow(
      <FavoriteCard
        id={rentalOffer.id}
        mark={rentalOffer.mark}
        image={rentalOffer.image}
        priceValue={rentalOffer.priceValue}
        priceText={rentalOffer.priceText}
        isBookmark={rentalOffer.isBookmark}
        rating={rentalOffer.rating}
        title={rentalOffer.title}
        type={rentalOffer.type}
        onRentalTitleClick={rentalTitleClickHandler}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />
  );

  favoriteCard.find(`.place-card__name`).props().onClick();
  expect(rentalTitleClickHandler.mock.calls.length).toBe(1);
});
