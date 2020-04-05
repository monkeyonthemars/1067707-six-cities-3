import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {propTypes} from '../../src/types/types.js';
import {Operation as UserOperation} from "../../src/reducer/user/user";
import {ActionCreator as DataActionCreator} from '../../src/reducer/data/data.js';
import {Operation as DataOperation} from '../../src/reducer/data/data.js';
import {ActionCreator as OffersActionCreator} from '../../src/reducer/offers/offers.js';
import {getCurrentCity, getCurrentOffers, getCurrentOffer, getCurrentComments, getNearbyOffers, getCities, getFavorites, getOffers} from '../../src/reducer/data/selectors.js';
import {getAuthorizationStatus, getAuthorizationEmail} from '../../src/reducer/user/selectors.js';
import {getActivePlaceCard} from '../../src/reducer/offers/selectors.js';
import history from '../../src/history.js';
import {AppRoute} from '../../src/const.js';
import PrivateRoute from '../private-route/private-route.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Main from '../main/main.jsx';
import Favorites from '../favorites/favorites.jsx';
import Property from '../property/property.jsx';

const App = (props) => {
  const {
    authorizationStatus,
    onRentalTitleClick,
    login,
    email,
    onCityClick,
    onFavoriteClick,
    onMouseEnter,
    onMouseLeave,
    currentOffers,
    currentNearbyOffers,
    currentOffer,
    currentComments,
    currentCity,
    cities,
    onSortTypeClick,
    activePlaceCard,
    onSubmitReviewClick,
    favorites
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
            onFavoriteClick={onFavoriteClick}
            onCityClick={onCityClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onRentalTitleClick={onRentalTitleClick}
            onSortTypeClick={onSortTypeClick}
            activePlaceCard={activePlaceCard}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn
            authorizationStatus={authorizationStatus}
            onSubmit={login}
            email={email}
          />
        </Route>
        <Route
          exact
          path={`${AppRoute.PROPERTY}/:id`}
          render={({}) => {
          // render={({match}) => {
            // console.log(match.params.id);
            return (
              <Property
                currentNearbyOffers={currentNearbyOffers}
                currentOffer={currentOffer}
                currentComments={currentComments}
                onRentalTitleClick={onRentalTitleClick}
                onFavoriteClick={onFavoriteClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                activePlaceCard={activePlaceCard}
                authorizationStatus={authorizationStatus}
                onSubmitReviewClick={onSubmitReviewClick}
                email={email}
              />
            );
          }}
        />
        <PrivateRoute exact path={AppRoute.FAVORITES} render={() => {
          return (
            <Favorites
              favorites={favorites}
              onRentalTitleClick={onRentalTitleClick}
              onFavoriteClick={onFavoriteClick}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              authorizationStatus={authorizationStatus}
              email={email}
            />
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
  currentOffer: propTypes.currentOffer,
  currentComments: propTypes.currentComments,
  onCityClick: propTypes.onCityClick,
  onMouseEnter: propTypes.onMouseEnter,
  onMouseLeave: propTypes.onMouseLeave,
  onFavoriteClick: propTypes.onFavoriteClick,
  activePlaceCard: propTypes.activePlaceCard,
  onRentalTitleClick: propTypes.onRentalTitleClick,
  currentNearbyOffers: propTypes.currentNearbyOffers,
  onSortTypeClick: propTypes.onSortTypeClick,
  onSubmitReviewClick: propTypes.onSubmitReviewClick,
  favorites: propTypes.favorites,
  offers: propTypes.offers
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  email: getAuthorizationEmail(state),
  cities: getCities(state),
  currentCity: getCurrentCity(state),
  currentOffers: getCurrentOffers(state),
  currentOffer: getCurrentOffer(state),
  currentComments: getCurrentComments(state),
  currentNearbyOffers: getNearbyOffers(state),
  activePlaceCard: getActivePlaceCard(state),
  favorites: getFavorites(state),
  offers: getOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
    dispatch(DataOperation.loadFavorites());
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
  onFavoriteClick(offerId, status) {
    dispatch(DataOperation.addToFavorites(offerId, status));
    dispatch(DataOperation.loadFavorites());
  },
  onRentalTitleClick(offerId) {
    dispatch(DataActionCreator.getOffers());
    dispatch(DataActionCreator.setCurrentOffer(offerId));
    dispatch(DataOperation.loadComments(offerId));
    dispatch(DataOperation.loadNearbyOffers(offerId));
  },
  onSortTypeClick(sortType) {
    dispatch(DataActionCreator.setCurrentSortType(sortType));
  },
  onSubmitReviewClick(comment) {
    dispatch(DataOperation.pushComment(comment));
  },

});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
