import {uniqueCities, SortType} from '../../const.js';
import {reducer, ActionCreator, ActionType} from './data.js';
import {rentalOffers, comments, review} from '../../mocks/offers-test.js';
// import {tagOfferToFavorites} from '../../utils.js';

const DEFAULT_CITY_INDEX = 0;
const DEFAULT_RATING = 5;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    cities: uniqueCities,
    currentCity: uniqueCities[DEFAULT_CITY_INDEX],
    currentOffers: [],
    offers: [],
    currentOffer: {},
    currentComments: [],
    currentNearbyOffers: [],
    currentSortType: SortType.POPULAR,
    favorites: [],
    review: ``,
    rating: 0
  });
});

it(`Reducer should change current city`, () => {
  expect(
      reducer(
          {
            cities: uniqueCities,
            currentCity: uniqueCities[DEFAULT_CITY_INDEX],
            currentOffers: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0
          },
          {
            type: ActionType.CHANGE_CITY,
            payload: uniqueCities[2],
          }
      )
  ).toEqual({
    cities: uniqueCities,
    currentCity: uniqueCities[2],
    currentOffers: [],
    offers: [],
    currentOffer: {},
    currentComments: [],
    currentNearbyOffers: [],
    currentSortType: SortType.POPULAR,
    favorites: [],
    review: ``,
    rating: 0
  });
});

it(`Reducer should load offers`, () => {
  expect(
      reducer(
          {
            cities: uniqueCities,
            currentCity: uniqueCities[DEFAULT_CITY_INDEX],
            currentOffers: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0
          },
          {
            type: ActionType.LOAD_OFFERS,
            payload: rentalOffers,
          }
      )
  ).toEqual({
    cities: uniqueCities,
    currentCity: uniqueCities[DEFAULT_CITY_INDEX],
    currentOffers: [],
    offers: rentalOffers,
    currentOffer: {},
    currentComments: [],
    currentNearbyOffers: [],
    currentSortType: SortType.POPULAR,
    favorites: [],
    review: ``,
    rating: 0
  });
});

// it(`Reducer should add to favorites`, () => {
//   expect(
//       reducer(
//           {
//             cities: uniqueCities,
//             currentCity: uniqueCities[DEFAULT_CITY_INDEX],
//             currentOffers: [],
//             offers: rentalOffers,
//             currentOffer: {},
//             currentComments: [],
//             currentNearbyOffers: [],
//             currentSortType: SortType.POPULAR,
//             favorites: [],
//             review: ``,
//             rating: 0
//           },
//           {
//             type: ActionType.ADD_TO_FAVORITES,
//             payload: 0,
//           }
//       )
//   ).toEqual({
//     cities: uniqueCities,
//     currentCity: uniqueCities[DEFAULT_CITY_INDEX],
//     currentOffers: [],
//     offers: tagOfferToFavorites(rentalOffers, 0),
//     currentOffer: {},
//     currentComments: [],
//     currentNearbyOffers: [],
//     currentSortType: SortType.POPULAR,
//     favorites: [],
//     review: ``,
//     rating: 0
//   });
// });

// it(`Reducer should set current offer`, () => {
//   expect(
//       reducer(
//           {
//             cities: uniqueCities,
//             currentCity: uniqueCities[DEFAULT_CITY_INDEX],
//             currentOffers: rentalOffers,
//             offers: [],
//             currentOffer: {},
//             currentComments: [],
//             currentNearbyOffers: [],
//             currentSortType: SortType.POPULAR,
//             favorites: [],
//             review: ``,
//             rating: 0
//           },
//           {
//             type: ActionType.SET_CURRENT_OFFER,
//             payload: 0,
//           }
//       )
//   ).toEqual({
//     cities: uniqueCities,
//     currentCity: uniqueCities[DEFAULT_CITY_INDEX],
//     currentOffers: rentalOffers,
//     offers: [],
//     currentOffer: rentalOffers[0],
//     currentComments: [],
//     currentNearbyOffers: [],
//     currentSortType: SortType.POPULAR,
//     favorites: [],
//     review: ``,
//     rating: 0
//   });
// });

it(`Reducer should load comments`, () => {
  expect(
      reducer(
          {
            cities: uniqueCities,
            currentCity: uniqueCities[DEFAULT_CITY_INDEX],
            currentOffers: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0
          },
          {
            type: ActionType.LOAD_COMMENTS,
            payload: comments,
          }
      )
  ).toEqual({
    cities: uniqueCities,
    currentCity: uniqueCities[DEFAULT_CITY_INDEX],
    currentOffers: [],
    offers: [],
    currentOffer: {},
    currentComments: comments,
    currentNearbyOffers: [],
    currentSortType: SortType.POPULAR,
    favorites: [],
    review: ``,
    rating: 0
  });
});

it(`Reducer should load nearby offers`, () => {
  expect(
      reducer(
          {
            cities: uniqueCities,
            currentCity: uniqueCities[DEFAULT_CITY_INDEX],
            currentOffers: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0
          },
          {
            type: ActionType.LOAD_NEARBY_OFFERS,
            payload: rentalOffers,
          }
      )
  ).toEqual({
    cities: uniqueCities,
    currentCity: uniqueCities[DEFAULT_CITY_INDEX],
    currentOffers: [],
    offers: [],
    currentOffer: {},
    currentComments: [],
    currentNearbyOffers: rentalOffers,
    currentSortType: SortType.POPULAR,
    favorites: [],
    review: ``,
    rating: 0
  });
});

it(`Reducer should set current sort type`, () => {
  expect(
      reducer(
          {
            cities: uniqueCities,
            currentCity: uniqueCities[DEFAULT_CITY_INDEX],
            currentOffers: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0
          },
          {
            type: ActionType.SET_CURRENT_SORT_TYPE,
            payload: SortType.TOP_RATED_FIRST,
          }
      )
  ).toEqual({
    cities: uniqueCities,
    currentCity: uniqueCities[DEFAULT_CITY_INDEX],
    currentOffers: [],
    offers: [],
    currentOffer: {},
    currentComments: [],
    currentNearbyOffers: [],
    currentSortType: SortType.TOP_RATED_FIRST,
    favorites: [],
    review: ``,
    rating: 0
  });
});

it(`Reducer should load favorites`, () => {
  expect(
      reducer(
          {
            cities: uniqueCities,
            currentCity: uniqueCities[DEFAULT_CITY_INDEX],
            currentOffers: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0
          },
          {
            type: ActionType.LOAD_FAVORITES,
            payload: rentalOffers,
          }
      )
  ).toEqual({
    cities: uniqueCities,
    currentCity: uniqueCities[DEFAULT_CITY_INDEX],
    currentOffers: [],
    offers: [],
    currentOffer: {},
    currentComments: [],
    currentNearbyOffers: [],
    currentSortType: SortType.POPULAR,
    favorites: rentalOffers,
    review: ``,
    rating: 0
  });
});

it(`Reducer should set current review`, () => {
  expect(
      reducer(
          {
            cities: uniqueCities,
            currentCity: uniqueCities[DEFAULT_CITY_INDEX],
            currentOffers: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0
          },
          {
            type: ActionType.SET_CURRENT_REVIEW,
            payload: `Test review`,
          }
      )
  ).toEqual({
    cities: uniqueCities,
    currentCity: uniqueCities[DEFAULT_CITY_INDEX],
    currentOffers: [],
    offers: [],
    currentOffer: {},
    currentComments: [],
    currentNearbyOffers: [],
    currentSortType: SortType.POPULAR,
    favorites: [],
    review: `Test review`,
    rating: 0
  });
});

it(`Reducer should set current rating`, () => {
  expect(
      reducer(
          {
            cities: uniqueCities,
            currentCity: uniqueCities[DEFAULT_CITY_INDEX],
            currentOffers: [],
            offers: [],
            currentOffer: {},
            currentComments: [],
            currentNearbyOffers: [],
            currentSortType: SortType.POPULAR,
            favorites: [],
            review: ``,
            rating: 0
          },
          {
            type: ActionType.SET_CURRENT_RATING,
            payload: 3,
          }
      )
  ).toEqual({
    cities: uniqueCities,
    currentCity: uniqueCities[DEFAULT_CITY_INDEX],
    currentOffers: [],
    offers: [],
    currentOffer: {},
    currentComments: [],
    currentNearbyOffers: [],
    currentSortType: SortType.POPULAR,
    favorites: [],
    review: ``,
    rating: 3
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity(uniqueCities[DEFAULT_CITY_INDEX])).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: uniqueCities[DEFAULT_CITY_INDEX]
    });
  });

  it(`Action creator for loda offers returns correct action`, () => {
    expect(ActionCreator.loadOffers(rentalOffers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: rentalOffers
    });
  });
  it(`Action creator for add to favorites returns correct action`, () => {
    expect(ActionCreator.addToFavorites(DEFAULT_CITY_INDEX)).toEqual({
      type: ActionType.ADD_TO_FAVORITES,
      payload: DEFAULT_CITY_INDEX
    });
  });
  it(`Action creator for set current offer returns correct action`, () => {
    expect(ActionCreator.setCurrentOffer(DEFAULT_CITY_INDEX)).toEqual({
      type: ActionType.SET_CURRENT_OFFER,
      payload: DEFAULT_CITY_INDEX
    });
  });
  it(`Action creator for load comments returns correct action`, () => {
    expect(ActionCreator.loadComments(comments)).toEqual({
      type: ActionType.LOAD_COMMENTS,
      payload: comments
    });
  });
  it(`Action creator for load nearby offers returns correct action`, () => {
    expect(ActionCreator.loadNearbyOffers(rentalOffers)).toEqual({
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: rentalOffers
    });
  });
  it(`Action creator for set current sort type returns correct action`, () => {
    expect(ActionCreator.setCurrentSortType(SortType.POPULAR)).toEqual({
      type: ActionType.SET_CURRENT_SORT_TYPE,
      payload: SortType.POPULAR
    });
  });
  it(`Action creator for loda favorites returns correct action`, () => {
    expect(ActionCreator.loadFavorites(rentalOffers)).toEqual({
      type: ActionType.LOAD_FAVORITES,
      payload: rentalOffers
    });
  });
  it(`Action creator for set current review returns correct action`, () => {
    expect(ActionCreator.setCurrentReview(review)).toEqual({
      type: ActionType.SET_CURRENT_REVIEW,
      payload: review
    });
  });
  it(`Action creator for set current rating returns correct action`, () => {
    expect(ActionCreator.setCurrentRating(DEFAULT_RATING)).toEqual({
      type: ActionType.SET_CURRENT_RATING,
      payload: DEFAULT_RATING
    });
  });
});
