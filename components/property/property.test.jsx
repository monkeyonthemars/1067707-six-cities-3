import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Property from './property.jsx';
import mocks from '../../src/mocks/offers-test.js';
import {AuthorizationStatus} from '../../src/const.js';

it(`<Property /> should render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <Property
          currentNearbyOffers={[]}
          currentOffer={mocks.rentalOffers[0]}
          currentComments={mocks.comments}
          onRentalTitleClick={() => {}}
          onFavoriteClick={() => {}}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          activePlaceCard={-1}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          onSubmitReviewClick={() => {}}
          email={mocks.email}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
