import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';
import mocks from '../../src/mocks/offers-test.js';

const rentalOffer = mocks.rentalOffers[3];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Handler should get data on hover`, () => {
  const onMouseEnter = jest.fn();

  const rentalOfferCard = shallow(
      <PlaceCard
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
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => {}}
      />
  );

  rentalOfferCard.find(`.place-card`).props().onMouseEnter();

  expect(onMouseEnter.mock.calls.length).toBe(1);
});
