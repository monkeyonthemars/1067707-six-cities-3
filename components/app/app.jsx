import React from "react";
import PropTypes from 'prop-types';
import Main from "../main/main.jsx";

const rentalTitleClickHandler = () => {};

const App = (props) => {
  const {rentalOffersCount, rentalOffers} = props;

  return (
    <Main
      rentalOffersCount={rentalOffersCount}
      rentalOffers={rentalOffers}
      onRentalTitleClick={rentalTitleClickHandler}
    />
  );
};

App.propTypes = {
  rentalOffersCount: PropTypes.number.isRequired,
  rentalOffers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
  ).isRequired
};

export default App;
