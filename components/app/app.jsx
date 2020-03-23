import React from 'react';
import {connect} from 'react-redux';
import {propTypes} from '../../src/types/types.js';
import {Operation as UserOperation} from "../../src/reducer/user/user";
import {ActionCreator as DataActionCreator} from '../../src/reducer/data/data.js';
import {ActionCreator as OffersActionCreator} from '../../src/reducer/offers/offers.js';
import {getCurrentCity, getCurrentOffers, getCities} from '../../src/reducer/data/selectors.js';
import {getAuthorizationStatus} from '../../src/reducer/user/selectors.js';
import SignIn from "../sign-in/sign-in.jsx";
import Main from '../main/main.jsx';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const rentalTitleClickHandler = () => {};

const App = (props) => {
  const {
    authorizationStatus,
    login,
    onCityClick,
    onMouseEnter,
    onMouseLeave,
    currentOffers,
    currentCity,
    cities
  } = props;

  if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
    return (
      <SignIn
        onSubmit={login}
      />
    );
  }

  return (
    <Main
      authorizationStatus={authorizationStatus}
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
  authorizationStatus: propTypes.authorizationStatus,
  login: propTypes.login,
  cities: propTypes.cities,
  currentCity: propTypes.currentCity,
  currentOffers: propTypes.currentOffers,
  onCityClick: propTypes.onCityClick,
  onMouseEnter: propTypes.onMouseEnter,
  onMouseLeave: propTypes.onMouseLeave
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  cities: getCities(state),
  currentCity: getCurrentCity(state),
  currentOffers: getCurrentOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },

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
