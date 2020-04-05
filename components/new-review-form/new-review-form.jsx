import React, {createRef} from "react";
import {propTypes} from "../../src/types/types";

const ReviewsMinMaxLength = {
  MIN_REVIEW_LENGTH: 50,
  MAX_REVIEW_LENGTH: 300,
};

const NewReviewForm = (props) => {

  const {
    activePlaceCard,
    onSubmitReviewClick,
  } = props;

  let userRating = 0;
  const reviewRef = createRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmitReviewClick({
      offerId: activePlaceCard,
      rating: userRating,
      review: reviewRef.current.value,
    });
  };

  let isSubmitButtonDisabled = true;

  const onChangeRating = (evt) => {
    userRating = evt.target.value;

    isSubmitButtonDisabled = !(
      userRating > 0 &&
      reviewRef.current.value.length >= ReviewsMinMaxLength.MIN_REVIEW_LENGTH &&
      reviewRef.current.value.length <= ReviewsMinMaxLength.MAX_REVIEW_LENGTH
    );
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
          defaultValue={5}
          id="5-stars"
          type="radio"
          onChange={(evt) => {
            onChangeRating(evt);
          }}
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
          defaultValue={4}
          id="4-stars"
          type="radio"
          onChange={(evt) => {
            onChangeRating(evt);
          }}
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
          defaultValue={3}
          id="3-stars"
          type="radio"
          onChange={(evt) => {
            onChangeRating(evt);
          }}
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
          defaultValue={2}
          id="2-stars"
          type="radio"
          onChange={(evt) => {
            onChangeRating(evt);
          }}
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
          defaultValue={1}
          id="1-star"
          type="radio"
          onChange={(evt) => {
            onChangeRating(evt);
          }}
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
        defaultValue={``}
        ref={reviewRef}
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
          disabled={isSubmitButtonDisabled}
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
};

export default NewReviewForm;

