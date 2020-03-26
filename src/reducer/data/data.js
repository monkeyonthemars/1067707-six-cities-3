import uniqueCities from '../../mocks/offers.js';
import {DEFAULT_CITY_INDEX} from '../../const.js';

const getOffersInTheCity = (city, offers) => {
  return offers.slice().filter((offer) => {
    return offer.city.name === city.name;
  });
};

const initialState = {
  cities: uniqueCities,
  currentCity: uniqueCities[DEFAULT_CITY_INDEX],
  currentOffers: [],
  offers: []
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  ADD_TO_FAVORITES: `ADD_TO_FAVORITES`
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
  })
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
      rating: offer.rating * 20,
      title: offer.title,
      type: offer.type,
      coordinates: [offer.location.latitude, offer.location.longitude],
      city: offer.city
    };
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
        dispatch(ActionCreator.getOffers());
      });
  }
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
        currentOffers: getOffersInTheCity(state.currentCity, state.offers)
      });

    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload
      });

    case ActionType.ADD_TO_FAVORITES:
      return extend(state, {
        offers: tagOfferToFavorites(state.offers, action.payload)
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};
