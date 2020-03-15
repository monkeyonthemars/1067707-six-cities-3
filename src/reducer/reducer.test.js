import {reducer, ActionCreator, ActionType} from "./reducer.js";

import mocks from '../mocks/offers-test.js';
import rentalOffers from '../mocks/offers.js';

const getOffersInTheCity = (city) => {
  return rentalOffers.slice().filter((offer) => {
    return offer.city.name === city.name;
  });
};

const getUniqueCitiesFromRentalOffers = (offers) => {
  return [...new Set(offers.map((offer) => {
    return offer.city;
  }))];
};

it(`Reducer without additional parameters should return initial state`, () => {
  const uniqueCities = getUniqueCitiesFromRentalOffers(rentalOffers);

  expect(reducer(void 0, {})).toEqual({
    cities: uniqueCities,
    currentCity: uniqueCities[0],
    currentOffers: getOffersInTheCity(uniqueCities[0]),
    activePlaceCard: -1
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(mocks.currentCity)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: mocks.currentCity
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for get offers returns correct action`, () => {
    expect(ActionCreator.getOffers(mocks.currentCity)).toEqual({
      type: ActionType.GET_OFFERS,
      payload: mocks.currentCity
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for set active place card returns correct action`, () => {
    expect(ActionCreator.setActivePlaceCard(mocks.rentalOffers[0].id)).toEqual({
      type: ActionType.SET_ACTIVE_PLACE_CARD,
      payload: mocks.rentalOffers[0].id
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for remove active place card returns correct action`, () => {
    expect(ActionCreator.removeActivePlaceCard()).toEqual({
      type: ActionType.REMOVE_ACTIVE_PLACE_CARD,
      payload: -1
    });
  });
});
