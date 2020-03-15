import React from 'react';
import {connect} from 'react-redux';
import {propTypes} from '../../src/types/types.js';
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
  cities: propTypes.cities,
  currentCity: propTypes.currentCity,
  currentOffers: propTypes.currentOffers,
  onCityClick: propTypes.onCityClick
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  currentCity: state.currentCity,
  currentOffers: state.currentOffers
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(evt, city, stopDefaultAction) {
    stopDefaultAction(evt);
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
