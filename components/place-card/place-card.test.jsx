import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';
import mocks from '../../src/mocks/offers-test.js';

const place = mocks.rentalOffers[3];

it(`<PlaceCard /> should render correctly`, () => {
  const tree = renderer.create(
      <PlaceCard
        id={place.id}
        mark={place.mark}
        image={place.image}
        priceValue={place.priceValue}
        priceText={place.priceText}
        isBookmark={place.isBookmark}
        rating={place.rating}
        title={place.title}
        type={place.type}
        onRentalTitleClick={() => {}}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
