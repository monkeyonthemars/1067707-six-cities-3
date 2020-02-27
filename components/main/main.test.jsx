import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const RENTAL_OFFERS_COUNT = 312;
const rentalOffers = [
  {title: `Beautiful & luxurious apartment at great location`},
  {title: `Wood and stone place`},
  {title: `Canal View Prinsengracht`},
  {title: `Nice, cozy, warm big bed apartment`}
];
const rentalTitleClickHandler = () => {};

it(`<Main /> should render correctly`, () => {
  const tree = renderer.create(
      <Main
        rentalOffersCount={RENTAL_OFFERS_COUNT}
        rentalOffers={rentalOffers}
        onRentalTitleClick={rentalTitleClickHandler}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
