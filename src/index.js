import React from "react";
import ReactDOM from "react-dom";
import App from "../components/app/app.jsx";
import rentalOffers from '../src/mocks/offers.js';

const RENTAL_OFFERS_COUNT = 312;
const CITY_AMSTERDAM_COORDINATES = [52.38333, 4.9];

ReactDOM.render(
    <App
      cityCoordinates={CITY_AMSTERDAM_COORDINATES}
      rentalOffersCount={RENTAL_OFFERS_COUNT}
      rentalOffers={rentalOffers}
    />,
    document.querySelector(`#root`)
);
