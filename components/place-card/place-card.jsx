import React from 'react';
import {propTypes} from '../../src/types/types.js';

const PlaceCard = (props) => {
  const {
    id,
    isPremium,
    image,
    priceValue,
    priceText,
    isBookmark,
    rating,
    title,
    type,
    onRentalTitleClick,
    onMouseEnter,
    onMouseLeave
  } = props;

  const markElement = isPremium ?
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
    : ``;

  const bookmarkTitle = isBookmark ? `In bookmarks` : `To bookmarks`;
  const bookmarkClass = isBookmark
    ? `place-card__bookmark-button place-card__bookmark-button--active button`
    : `place-card__bookmark-button button`;

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => {
        onMouseEnter(id);
      }}
      onMouseLeave={() => {
        onMouseLeave();
      }}
    >
      {markElement}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={`${image}`}
            alt="Place image"
            width={260}
            height={200}
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{priceValue}</b>
            <span className="place-card__price-text">/&nbsp;{priceText}</span>
          </div>
          <button className={bookmarkClass} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{bookmarkTitle}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={onRentalTitleClick}>
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = propTypes.placeCard;

export default PlaceCard;
