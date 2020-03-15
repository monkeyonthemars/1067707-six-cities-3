import React from 'react';
import {connect} from 'react-redux';
import {propTypes} from '../../src/types/types.js';
import {ActionCreator} from "../../src/reducer/reducer.js";
import Main from '../main/main.jsx';

const rentalTitleClickHandler = () => {};

const App = (props) => {
  const {
    onCityClick,
    onMouseEnter,
    onMouseLeave,
    currentOffers,
    currentCity,
    cities
  } = props;

  return (
    <Main
      cities={cities}
      currentCity={currentCity}
      currentOffers={currentOffers}
      onRentalTitleClick={rentalTitleClickHandler}
      onCityClick={onCityClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

App.propTypes = {
  cities: propTypes.cities,
  currentCity: propTypes.currentCity,
  currentOffers: propTypes.currentOffers,
  onCityClick: propTypes.onCityClick,
  onMouseEnter: propTypes.onMouseEnter,
  onMouseLeave: propTypes.onMouseLeave
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
  },
  onMouseEnter(id) {
    dispatch(ActionCreator.setActivePlaceCard(id));
  },
  onMouseLeave() {
    dispatch(ActionCreator.removeActivePlaceCard());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
