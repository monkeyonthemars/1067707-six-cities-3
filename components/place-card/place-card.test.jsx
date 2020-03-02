import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';
import placesList from '../../src/mocks/offers-test.js';

const place = placesList[3];

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
        name={place.name}
        type={place.type}
        onRentalTitleClick={() => {}}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
