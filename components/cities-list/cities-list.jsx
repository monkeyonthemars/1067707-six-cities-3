import React from 'react';
import {propTypes} from '../../src/types/types.js';

const CitiesList = (props) => {
  const {
    cities,
    onCityClick,
    currentCity
  } = props;

  const stopDefaultAction = (evt) => {
    evt.preventDefault();
  };

  return (
    <ul className="locations__list tabs__list">

      {cities.map((city) => (
        <React.Fragment key={city.name}>
          <li className="locations__item">
            <a
              className={`locations__item-link tabs__item${city.name === currentCity.name ? ` tabs__item--active` : ``}`}
              href="#"
              onClick={(evt) => onCityClick(evt, city, stopDefaultAction)}
            >
              <span>{city.name}</span>
            </a>
          </li>
        </React.Fragment>
      ))}

    </ul>
  );

};

CitiesList.propTypes = {
  cities: propTypes.cities,
  currentCity: propTypes.currentCity,
  onCityClick: propTypes.onCityClick
};

export default CitiesList;
