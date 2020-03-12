import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const ICON = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});
const ZOOM_VALUE = 12;

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._mapRef = createRef();
  }

  componentDidMount() {
    const {
      cityCoordinates,
      currentOffers
    } = this.props;

    this.map = leaflet.map(this._mapRef.current, {
      center: cityCoordinates,
      zoom: ZOOM_VALUE,
      zoomControl: false,
      marker: true
    });
    this.map.setView(cityCoordinates, ZOOM_VALUE);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.markerLayers = [];
    currentOffers.map((rentalOffer) => (
      this.markerLayers.push(leaflet
          .marker(rentalOffer.coordinates, {ICON})
          .addTo(this.map))
    ));
  }

  componentDidUpdate() {
    this.map.setView(this.props.cityCoordinates, ZOOM_VALUE);

    this.markerLayers.map((markerLayer) => (
      this.map.removeLayer(markerLayer)
    ));

    this.props.currentOffers.map((rentalOffer) => (
      this.markerLayers.push(leaflet
          .marker(rentalOffer.coordinates, {ICON})
          .addTo(this.map))
    ));
  }

  render() {
    return <section className="cities__map map" ref={this._mapRef} />;
  }
}

Map.propTypes = {
  cityCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentOffers: PropTypes.arrayOf(
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