import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
  }

  componentDidMount() {
    const {
      cityCoordinates,
      rentalOffers
    } = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoomValue = 12;
    const map = leaflet.map(this._mapRef.current, {
      center: cityCoordinates,
      zoom: zoomValue,
      zoomControl: false,
      marker: true
    });
    map.setView(cityCoordinates, zoomValue);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    rentalOffers.map((rentalOffer) => (
      leaflet
        .marker(rentalOffer.coordinates, {icon})
        .addTo(map)
    ));
  }

  render() {
    return <section className="cities__map map" ref={this._mapRef} />;
  }
}

Map.propTypes = {
  cityCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  rentalOffers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        mark: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        priceValue: PropTypes.number.isRequired,
        priceText: PropTypes.string.isRequired,
        isBookmark: PropTypes.bool.isRequired,
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        coordinates: PropTypes.array.isRequired
      })
  ).isRequired
};

export default Map;
