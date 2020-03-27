import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {propTypes} from '../../src/types/types.js';
import {Operation as UserOperation} from "../../src/reducer/user/user";
import {ActionCreator as DataActionCreator} from '../../src/reducer/data/data.js';
import {ActionCreator as OffersActionCreator} from '../../src/reducer/offers/offers.js';
import {getCurrentCity, getCurrentOffers, getCities} from '../../src/reducer/data/selectors.js';
import {getAuthorizationStatus, getAuthorizationEmail} from '../../src/reducer/user/selectors.js';
import history from '../../src/history.js';
import {AppRoute} from '../../src/const.js';
import PrivateRoute from '../private-route/private-route.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Main from '../main/main.jsx';
import Favorites from '../favorites/favorites.jsx';

const rentalTitleClickHandler = () => {};

const App = (props) => {
  const {
    authorizationStatus,
    login,
    email,
    onCityClick,
    onFavoriteClick,
    onMouseEnter,
    onMouseLeave,
    currentOffers,
    currentCity,
    cities
  } = props;

  return (
    <Router
      history={history}
    >
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main
            authorizationStatus={authorizationStatus}
            email={email}
            cities={cities}
            currentCity={currentCity}
            currentOffers={currentOffers}
            onRentalTitleClick={rentalTitleClickHandler}
            onFavoriteClick={onFavoriteClick}
            onCityClick={onCityClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn
            authorizationStatus={authorizationStatus}
            onSubmit={login}
          />
        </Route>
        <PrivateRoute exact path={AppRoute.FAVORITES} render={() => {
          return (
            <Favorites />
          );
        }}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {
  authorizationStatus: propTypes.authorizationStatus,
  login: propTypes.login,
  email: propTypes.email,
  cities: propTypes.cities,
  currentCity: propTypes.currentCity,
  currentOffers: propTypes.currentOffers,
  onCityClick: propTypes.onCityClick,
  onMouseEnter: propTypes.onMouseEnter,
  onMouseLeave: propTypes.onMouseLeave,
  onFavoriteClick: propTypes.onFavoriteClick
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  email: getAuthorizationEmail(state),
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
    dispatch(DataActionCreator.getOffers());
  },
  onMouseEnter(id) {
    dispatch(OffersActionCreator.setActivePlaceCard(id));
  },
  onMouseLeave() {
    dispatch(OffersActionCreator.removeActivePlaceCard());
  },
  onFavoriteClick(offerId) {
    dispatch(DataActionCreator.addToFavorites(offerId));
    dispatch(DataActionCreator.getOffers());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
