import React from 'react';
import {propTypes} from '../../src/types/types';
import {ReviewsMinMaxLength, UserRaviewRating} from '../../src/const.js';

const NewReviewForm = (props) => {

  const {
    activePlaceCard,
    onSubmitReviewClick,
    onChangeNewReviewForm,
    submitButtonDisabled,
    isSending,
    review,
    rating
  } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmitReviewClick({
      offerId: activePlaceCard,
      userRating: rating,
      userReview: review,
    }, true);
  };

  const onChangeReview = (evt) => {
    onChangeForm(
        !(rating > 0 &&
        review.length >= ReviewsMinMaxLength.MIN_REVIEW_LENGTH &&
        review.length <= ReviewsMinMaxLength.MAX_REVIEW_LENGTH
        ),
        evt.target.value,
        rating
    );
  };

  const onChangeRating = (evt) => {
    onChangeForm(
        !(rating > 0 &&
        review.length >= ReviewsMinMaxLength.MIN_REVIEW_LENGTH &&
        review.length <= ReviewsMinMaxLength.MAX_REVIEW_LENGTH
        ),
        review,
        Number(evt.target.value));
  };

  const onChangeForm = (buttonStatus, userReview, userRating) => {
    onChangeNewReviewForm(buttonStatus, userReview, userRating);
  };

  return (
    <form className="reviews__form form" action="#" method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        handleSubmit(evt);
      }}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={UserRaviewRating.rating5}
          id="5-stars"
          type="radio"
          onChange={(evt) => {
            onChangeRating(evt);
          }}
          disabled={isSending}
          checked={rating === UserRaviewRating.rating5}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={UserRaviewRating.rating4}
          id="4-stars"
          type="radio"
          onChange={(evt) => {
            onChangeRating(evt);
          }}
          disabled={isSending}
          checked={rating === UserRaviewRating.rating4}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={UserRaviewRating.rating3}
          id="3-stars"
          type="radio"
          onChange={(evt) => {
            onChangeRating(evt);
          }}
          disabled={isSending}
          checked={rating === UserRaviewRating.rating3}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={UserRaviewRating.rating2}
          id="2-stars"
          type="radio"
          onChange={(evt) => {
            onChangeRating(evt);
          }}
          disabled={isSending}
          checked={rating === UserRaviewRating.rating2}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={UserRaviewRating.rating1}
          id="1-star"
          type="radio"
          onChange={(evt) => {
            onChangeRating(evt);
          }}
          disabled={isSending}
          checked={rating === UserRaviewRating.rating1}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(evt) => {
          onChangeReview(evt);
        }}
        disabled={isSending}
        value={review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{` `}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{` `}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={submitButtonDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

NewReviewForm.propTypes = {
  activePlaceCard: propTypes.activePlaceCard,
  onSubmitReviewClick: propTypes.onSubmitReviewClick,
  onChangeNewReviewForm: propTypes.onChangeNewReviewForm,
  submitButtonDisabled: propTypes.submitButtonDisabled,
  isSending: propTypes.isSending,
  review: propTypes.review,
  rating: propTypes.rating
};

export default NewReviewForm;

