import mocks from '../../mocks/offers-test.js';
import {ActionCreator, ActionType} from './offers.js';

const DEFAULT_OFFER_INDEX = 0;

describe(`Action creators work correctly`, () => {
  it(`Action creator for set active place card returns correct action`, () => {
    expect(ActionCreator.setActivePlaceCard(mocks.rentalOffers[DEFAULT_OFFER_INDEX].id)).toEqual({
      type: ActionType.SET_ACTIVE_PLACE_CARD,
      payload: mocks.rentalOffers[DEFAULT_OFFER_INDEX].id
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
