import React from 'react';
import {propTypes} from '../../src/types/types.js';
import Map from '../map/map.jsx';
import CitiesList from '../cities-list/cities-list.jsx';

const Main = (props) => {
  const {currentOffers, onRentalTitleClick, onCityClick, currentCity, cities} = props;

  return (
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
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
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
                <b className="places__found">{currentOffers.length} places to stay in Amsterdam</b>
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

                  {currentOffers.map((offer, i) => (
                    <React.Fragment key={i}>

                      <article className="cities__place-card place-card">
                        <div className="place-card__mark">
                          <span>Premium</span>
                        </div>
                        <div className="cities__image-wrapper place-card__image-wrapper">
                          <a href="#">
                            <img className="place-card__image" src="img/apartment-01.jpg" alt="Place image" width={260} height={200} />
                          </a>
                        </div>
                        <div className="place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">€120</b>
                              <span className="place-card__price-text">/&nbsp;night</span>
                            </div>
                            <button className="place-card__bookmark-button button" type="button">
                              <svg className="place-card__bookmark-icon" width={18} height={19}>
                                <use xlinkHref="#icon-bookmark" />
                              </svg>
                              <span className="visually-hidden">To bookmarks</span>
                            </button>
                          </div>
                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={{width: `80%`}} />
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <h2 className="place-card__name" onClick={onRentalTitleClick}>
                            <a href="#">{offer.title}</a>
                          </h2>
                          <p className="place-card__type">Apartment</p>
                        </div>
                      </article>

                    </React.Fragment>
                  ))}

                </div>
              </section>
              <div className="cities__right-section">
                <Map
                  cityCoordinates={currentCity.coordinates}
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
  );
};

Main.propTypes = {
  cities: propTypes.cities,
  currentCity: propTypes.currentCity,
  currentOffers: propTypes.currentOffers,
  onRentalTitleClick: propTypes.onRentalTitleClick,
  onCityClick: propTypes.onCityClick
};

export default Main;
