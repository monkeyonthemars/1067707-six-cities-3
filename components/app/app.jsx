import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const rentalTitleClickHandler = () => {};

const App = (props) => {
  const {cityCoordinates, rentalOffersCount, rentalOffers} = props;

  return (
    <Main
      cityCoordinates={cityCoordinates}
      rentalOffersCount={rentalOffersCount}
      rentalOffers={rentalOffers}
      onRentalTitleClick={rentalTitleClickHandler}
    />
  );
};

App.propTypes = {
  cityCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  rentalOffersCount: PropTypes.number.isRequired,
  rentalOffers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        mark: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        priceValue: PropTypes.number.isRequired,
        priceText: PropTypes.string.isRequired,
        isBookmark: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        coordinates: PropTypes.array.isRequired
      })
  ).isRequired
};

export default App;
