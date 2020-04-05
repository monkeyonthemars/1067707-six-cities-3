import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import NewReviewForm from './new-review-form.jsx';

it(`<NewReviewForm /> should render correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <NewReviewForm
          activePlaceCard={-1}
          onSubmitReviewClick={() => {}}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
