import React from "react";
import ReactDOM from "react-dom";
import App from "../components/app/app.jsx";

const RENTAL_OFFERS_COUNT = 312;

const rentalOffers = [
  {title: `Beautiful & luxurious apartment at great location`},
  {title: `Wood and stone place`},
  {title: `Canal View Prinsengracht`},
  {title: `Nice, cozy, warm big bed apartment`}
];

ReactDOM.render(
    <App
      rentalOffersCount={RENTAL_OFFERS_COUNT}
      rentalOffers={rentalOffers}
    />,
    document.querySelector(`#root`)
);
