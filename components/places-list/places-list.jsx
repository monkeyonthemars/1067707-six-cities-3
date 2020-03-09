import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activePlaceCard: -1};

    this._setActivePlaceCard = this._setActivePlaceCard.bind(this);
    this._removeActivePlaceCard = this._removeActivePlaceCard.bind(this);
  }

  _setActivePlaceCard(id) {
    this.setState({activePlaceCard: id});
  }

  _removeActivePlaceCard() {
    this.setState({activePlaceCard: -1});
  }

  render() {
    return (
      <div className="cities__places-list places__list tabs__content">
        {this.props.placesList.map((place) => {
          return (
            <React.Fragment key={place.id}>
              <PlaceCard
                id={place.id}
                mark={place.mark}
                image={place.image}
                priceValue={place.priceValue}
                priceText={place.priceText}
                isBookmark={place.isBookmark}
                rating={place.rating}
                title={place.title}
                type={place.type}
                onRentalTitleClick={this.props.onRentalTitleClick}
                onMouseEnter={this._setActivePlaceCard}
                onMouseLeave={this._removeActivePlaceCard}
              />
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

PlacesList.propTypes = {
  placesList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        mark: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        priceValue: PropTypes.number.isRequired,
        priceText: PropTypes.string.isRequired,
        isBookmark: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired
      })
  ).isRequired,
  onRentalTitleClick: PropTypes.func.isRequired
};

export default PlacesList;
