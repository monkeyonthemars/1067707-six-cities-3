import React from 'react';
// import PropTypes from 'prop-types';

const CitiesList = (props) => {
  const {
    cities,
    onCityClick,
    currentCity
  } = props;

  return (
    cities.map((city) => (
      <li
        key={city.name}
        className="locations__item">
        <a
          className={`locations__item-link tabs__item${city.name === currentCity.name ? ` tabs__item--active` : ``}`}
          href="#"
          onClick={(evt) => onCityClick(evt, city)}
        >
          <span>{city.name}</span>
        </a>
      </li>
    ))
  );

};

// CitiesList.propTypes = {
//   id: PropTypes.number.isRequired,
//   mark: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   priceValue: PropTypes.number.isRequired,
//   priceText: PropTypes.string.isRequired,
//   isBookmark: PropTypes.bool.isRequired,
//   rating: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   onRentalTitleClick: PropTypes.func.isRequired,
//   onMouseEnter: PropTypes.func.isRequired,
//   onMouseLeave: PropTypes.func.isRequired
// };

export default CitiesList;
