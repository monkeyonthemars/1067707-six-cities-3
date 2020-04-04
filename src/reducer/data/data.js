import uniqueCities from '../../mocks/offers.js';
import {DEFAULT_CITY_INDEX, SortType} from '../../const.js';

const getOffersInTheCity = (city, offers) => {
  return offers.slice().filter((offer) => {
    return offer.city.name === city.name;
  });
};

const initialState = {
  cities: uniqueCities,
  currentCity: uniqueCities[DEFAULT_CITY_INDEX],
  currentOffers: [],
  offers: [],
  currentOffer: {},
  currentComments: [],
  currentNearbyOffers: [],
  currentSortType: SortType.POPULAR,
  favorites: []
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  ADD_TO_FAVORITES: `ADD_TO_FAVORITES`,
  SET_CURRENT_OFFER: `SET_CURRENT_OFFER`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  SET_CURRENT_SORT_TYPE: `SET_CURRENT_SORT_TYPE`,
  LOAD_FAVORITES: `LOAD_FAVORITES`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: city
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  addToFavorites: (offerId) => ({
    type: ActionType.ADD_TO_FAVORITES,
    payload: offerId
  }),
  setCurrentOffer: (offerId) => ({
    type: ActionType.SET_CURRENT_OFFER,
    payload: offerId
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
  loadNearbyOffers: (offers) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: offers
  }),
  setCurrentSortType: (sortType) => ({
    type: ActionType.SET_CURRENT_SORT_TYPE,
    payload: sortType
  }),
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
  })
};

const getOfferById = (offers, offerId) => {
  return offers.find((item) => {
    return item.id === offerId;
  });
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const offers = toRAW(response.data);
        const city = uniqueCities[DEFAULT_CITY_INDEX];

        dispatch(ActionCreator.loadOffers(offers));
        dispatch(ActionCreator.changeCity(city));
      });
  },
  loadComments1: (offerId) => (dispatch, getState, api) => {
    return api.get(`/comments/` + offerId)
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
      });
  },
  loadNearbyOffers: (offerId) => (dispatch, getState, api) => {
    return api.get(`/hotels/` + offerId + `/nearby`)
      .then((response) => {
        dispatch(ActionCreator.loadNearbyOffers(toRAW(response.data)));
      });
  },
  pushComment: (comment) => (dispatch, getState, api) => {
    return api.post(`/comments/${comment.offerId}`, {
      comment: comment.review,
      rating: comment.rating,
    })
      .then(() => {
        dispatch(Operation.loadComments1(comment.offerId));
      })
      .catch((err) => {
        throw err;
      });
  },
  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(toRAW(response.data)));
      });
  },
  addToFavorites: (offerId, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${offerId}/${status}`)
      .then(() => {
        dispatch(ActionCreator.addToFavorites(offerId));
      })
      .catch((err) => {
        throw err;
      });
  },
};

const tagOfferToFavorites = (offers, offerId) => {
  offers.forEach((item) => {
    if (item.id === offerId) {
      item.isBookmark = !item.isBookmark;
    }
  });
  return offers.slice();
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        currentOffers: getOffersInTheCity(state.currentCity, state.offers, state.currentSortType)
      });

    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });

    case ActionType.ADD_TO_FAVORITES:
      return extend(state, {
        offers: tagOfferToFavorites(state.offers, action.payload)
      });

    case ActionType.SET_CURRENT_OFFER:
      return extend(state, {
        currentOffer: getOfferById(state.currentOffers, action.payload)
      });

    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        currentComments: action.payload
      });

    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(state, {
        currentNearbyOffers: action.payload
      });

    case ActionType.SET_CURRENT_SORT_TYPE:
      return extend(state, {
        currentSortType: action.payload
      });

    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload
      });
  }

  return state;
};

const toRAW = (offers) => {
  return offers.map((offer) => {
    return {
      id: offer.id,
      mark: offer.is_premium ? `Premium` : ``,
      image: offer.preview_image,
      priceValue: offer.price,
      priceText: `night`,
      isBookmark: offer.is_favorite,
      rating: offer.rating,
      title: offer.title,
      type: offer.type,
      coordinates: [offer.location.latitude, offer.location.longitude],
      city: offer.city,
      bedrooms: offer.bedrooms,
      description: offer.description,
      goods: offer.goods,
      host: offer.host,
      images: offer.images,
      maxAdults: offer.max_adults,
      ratingText: offer.rating
    };
  });
};

export {reducer, Operation, ActionType, ActionCreator};
