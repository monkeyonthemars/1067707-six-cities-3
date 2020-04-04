import {createSelector} from "reselect";
import {SortType} from '../../const.js';
import NameSpace from "../name-space.js";


export const getCurrentCity = (state) => {
  return state[NameSpace.DATA].currentCity;
};

export const getCurrentOffer = (state) => {
  return state[NameSpace.DATA].currentOffer;
};

export const getCurrentSortType = (state) => {
  return state[NameSpace.DATA].currentSortType;
};

export const getCurrentComments = (state) => {
  return state[NameSpace.DATA].currentComments;
};

export const getNearbyOffers = (state) => {
  return state[NameSpace.DATA].currentNearbyOffers;
};

export const getFavorites = (state) => {
  return state[NameSpace.DATA].favorites;
};

export const getClickedOffer = (state) => {
  return state[NameSpace.DATA].clickedOffer;
};

export const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getCities = (state) => {
  return state[NameSpace.DATA].cities;
};

export const getCurrentOffers = createSelector(
    getCurrentCity,
    getOffers,
    getCurrentSortType,
    (city, offers, sortType) => {
      const tempOffers = offers.slice().filter((offer) => {
        return offer.city.name === city.name;
      });
      switch (sortType) {
        case SortType.LOW_TO_HIGH:
          return tempOffers.sort((a, b) => {
            return a.priceValue - b.priceValue;
          });
        case SortType.HIGH_TO_LOW:
          return tempOffers.sort((a, b) => {
            return b.priceValue - a.priceValue;
          });
        case SortType.TOP_RATED_FIRST:
          return tempOffers.sort((a, b) => {
            return b.rating - a.rating;
          });
        default:
          return tempOffers;
      }
    }
);
