import React from "react";
import ReactDOM from "react-dom";
import App from "../components/app/app.jsx";

const RENTAL_OFFERS_COUNT = 312;

ReactDOM.render(
    <App
      rentalOffersCount={RENTAL_OFFERS_COUNT}
    />,
    document.querySelector(`#root`)
);
