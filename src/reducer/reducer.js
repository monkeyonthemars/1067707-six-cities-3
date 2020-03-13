import rentalOffersList from '../mocks/offers.js';

const getOffersInTheCity = (city) => {
  return rentalOffersList.slice().filter((offer) => {
    return offer.city.name === city.name;
  });
};

const getUniqueCitiesFromRentalOffers = (offers) => {
  return [...new Set(offers.map((offer) => {
    return offer.city;
  }))];
};

const uniqueCities = getUniqueCitiesFromRentalOffers(rentalOffersList);

const initialState = {
  cities: uniqueCities,
  currentCity: uniqueCities[0],
  currentOffers: getOffersInTheCity(uniqueCities[0])
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: city
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        currentOffers: getOffersInTheCity(action.payload)
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};
