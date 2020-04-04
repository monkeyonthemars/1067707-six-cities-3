import React from "react";
import {SortType} from '../../src/const.js';
import {propTypes} from '../../src/types/types.js';

const Sort = (props) => {

  const {onSortTypeClick} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {
          Object.keys(SortType).map((sortType) => {
            return (
              <li className="places__option" tabIndex={0}
                key={sortType}
                onClick={() => {
                  onSortTypeClick(SortType[sortType]);
                }}>{SortType[sortType]}</li>
            );
          })
        }
      </ul>
    </form>
  );
};

Sort.propTypes = {
  onSortTypeClick: propTypes.onSortTypeClick,
};

export default Sort;
