import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../src/reducer/reducer.js";
import Main from '../main/main.jsx';

const rentalTitleClickHandler = () => {};

const App = (props) => {
  const {onCityClick, currentOffers, currentCity, cities} = props;

  return (
    <Main
      cities={cities}
      currentCity={currentCity}
      currentOffers={currentOffers}
      onRentalTitleClick={rentalTitleClickHandler}
      onCityClick={onCityClick}
    />
  );
};

App.propTypes = {
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
      }).isRequired
  ).isRequired,
  currentCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  currentOffers: PropTypes.arrayOf(
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
  ).isRequired,
  onCityClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  currentCity: state.currentCity,
  currentOffers: state.currentOffers
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(evt, city) {
    evt.preventDefault();
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
