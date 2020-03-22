import uniqueCities from '../../mocks/offers.js';
import {reducer, ActionCreator, ActionType} from './data.js';

const DEFAULT_CITY_INDEX = 0;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    cities: uniqueCities,
    currentCity: uniqueCities[DEFAULT_CITY_INDEX],
    currentOffers: [],
    offers: []
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(uniqueCities[DEFAULT_CITY_INDEX])).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: uniqueCities[DEFAULT_CITY_INDEX]
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for get offers returns correct action`, () => {
    expect(ActionCreator.getOffers(uniqueCities[DEFAULT_CITY_INDEX])).toEqual({
      type: ActionType.GET_OFFERS,
      payload: uniqueCities[DEFAULT_CITY_INDEX]
    });
  });
});
