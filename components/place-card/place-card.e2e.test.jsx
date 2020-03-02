import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';
import placesList from '../../src/mocks/offers-test.js';

const place = placesList[3];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Handler should get data on hover`, () => {
  const onMouseEnter = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        id={place.id}
        mark={place.mark}
        image={place.image}
        priceValue={place.priceValue}
        priceText={place.priceText}
        isBookmark={place.isBookmark}
        rating={place.rating}
        name={place.name}
        type={place.type}
        onRentalTitleClick={() => {}}
        onMouseEnter={onMouseEnter}
        onMouseLeave={() => {}}
      />
  );

  placeCard.find(`.place-card`).props().onMouseEnter();

  expect(onMouseEnter.mock.calls.length).toBe(1);
});
