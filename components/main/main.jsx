import React from 'react';
import {Link, Redirect} from "react-router-dom";
import {propTypes} from '../../src/types/types.js';
import Map from '../map/map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';
import PlacesList from '../places-list/places-list.jsx';
import {AppRoute} from '../../src/const.js';
import {AuthorizationStatus} from '../../src/const.js';

const Main = (props) => {
  let {
    authorizationStatus,
    email,
    currentOffers,
    onFavoriteClick,
    onRentalTitleClick,
    currentCity,
    cities,
    onCityClick,
    onMouseEnter,
    onMouseLeave
  } = props;

  const authInfo = authorizationStatus === AuthorizationStatus.NO_AUTH
    ? <Link
      className="header__nav-link header__nav-link--profile"
      to={AppRoute.LOGIN}
      href="#"
    >
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__login">Sign in</span>
    </Link>
    : <Link
      className="header__nav-link header__nav-link--profile"
      to={AppRoute.FAVORITES}
      href="#"
    >
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__user-name user__name">{email}</span>
    </Link>;

  return authorizationStatus === AuthorizationStatus.NO_ACCESS
    ? <Redirect to={AppRoute.LOGIN} />
    : ((
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    {authInfo}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList
                cities={cities}
                currentCity={currentCity}
                onCityClick={onCityClick}
              />
            </section>
          </div>
          <div className="cities">

            {currentOffers.length > 0 ?

              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                      Popular
                      <svg className="places__sorting-arrow" width={7} height={4}>
                        <use xlinkHref="#icon-arrow-select" />
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                      <li className="places__option" tabIndex={0}>Price: low to high</li>
                      <li className="places__option" tabIndex={0}>Price: high to low</li>
                      <li className="places__option" tabIndex={0}>Top rated first</li>
                    </ul>
                  </form>
                  <div className="cities__places-list places__list tabs__content">

                    <PlacesList
                      placesList={currentOffers}
                      onRentalTitleClick={onRentalTitleClick}
                      onFavoriteClick={onFavoriteClick}
                      onMouseEnter={onMouseEnter}
                      onMouseLeave={onMouseLeave}
                    />

                  </div>
                </section>
                <div className="cities__right-section">
                  <Map
                    cityCoordinates={currentCity.location}
                    currentOffers={currentOffers}
                  />
                </div>
              </div>
              :
              <div className="cities__places-container cities__places-container--empty container">
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property availbale at the moment in Dusseldorf</p>
                  </div>
                </section>
                <div className="cities__right-section"></div>
              </div>
            };

          </div>
        </main>
      </div>
    ));
};

Main.propTypes = {
  authorizationStatus: propTypes.authorizationStatus,
  email: propTypes.email,
  cities: propTypes.cities,
  currentCity: propTypes.currentCity,
  currentOffers: propTypes.currentOffers,
  onRentalTitleClick: propTypes.onRentalTitleClick,
  onFavoriteClick: propTypes.onFavoriteClick,
  onCityClick: propTypes.onCityClick,
  onMouseEnter: propTypes.onMouseEnter,
  onMouseLeave: propTypes.onMouseLeave
};

export default Main;
