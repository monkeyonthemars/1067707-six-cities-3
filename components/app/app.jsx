import React from 'react';
import {connect} from 'react-redux';
import {propTypes} from '../../src/types/types.js';
import {ActionCreator as DataActionCreator} from '../../src/reducer/data/data.js';
import {ActionCreator as OffersActionCreator} from '../../src/reducer/offers/offers.js';
import {getCurrentCity, getCurrentOffers, getCities} from '../../src/reducer/data/selectors.js';
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
  cities: getCities(state),
  currentCity: getCurrentCity(state),
  currentOffers: getCurrentOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(DataActionCreator.changeCity(city));
    dispatch(DataActionCreator.getOffers(city));
  },
  onMouseEnter(id) {
    dispatch(OffersActionCreator.setActivePlaceCard(id));
  },
  onMouseLeave() {
    dispatch(OffersActionCreator.removeActivePlaceCard());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
