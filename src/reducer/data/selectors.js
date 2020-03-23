import {createSelector} from "reselect";
import NameSpace from "../name-space.js";


export const getCurrentCity = (state) => {
  return state[NameSpace.DATA].currentCity;
};

const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getCities = (state) => {
  return state[NameSpace.DATA].cities;
};

export const getCurrentOffers = createSelector(
    getCurrentCity,
    getOffers,
    (city, offers) => {
      return offers.slice().filter((offer) => {
        return offer.city.name === city.name;
      });
    }
);
