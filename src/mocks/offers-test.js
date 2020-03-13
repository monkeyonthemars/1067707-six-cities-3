const CITY = {
  PARIS: {
    coordinates: [48.904715, 2.359015],
    name: `PARIS`
  },
  COLOGNE: {
    coordinates: [50.935172, 6.953100],
    name: `COLOGNE`
  },
  BRUSSELS: {
    coordinates: [50.850345, 4.351720],
    name: `BRUSSELS`
  },
  AMSTERDAM: {
    coordinates: [52.38334, 4.8],
    name: `AMSTERDAM`
  },
  HAMBURG: {
    coordinates: [53.551085, 9.993681],
    name: `HAMBURG`
  },
  DUSSELDORF: {
    coordinates: [51.227740, 6.773455],
    name: `DUSSELDORF`
  }
};

const cities = [
  {
    coordinates: [48.904715, 2.359015],
    name: `PARIS`
  },
  {
    coordinates: [50.935172, 6.953100],
    name: `COLOGNE`
  },
  {
    coordinates: [50.850345, 4.351720],
    name: `BRUSSELS`
  },
  {
    coordinates: [52.38333, 4.9],
    name: `AMSTERDAM`
  },
  {
    coordinates: [53.551085, 9.993681],
    name: `HAMBURG`
  },
  {
    coordinates: [51.227740, 6.773455],
    name: `DUSSELDORF`
  }
];

const currentCity = {
  coordinates: [48.904715, 2.359015],
  name: `PARIS`
};

const rentalOffers = [
  {
    id: 0,
    mark: `Premium`,
    image: `apartment-02.jpg`,
    priceValue: 120,
    priceText: `night`,
    isBookmark: false,
    rating: 100,
    title: `Luxury Tiny House, flowerbulb region nearby A'dam`,
    type: `Apartment`,
    coordinates: [52.4009553943508, 4.86309666406198],
    city: CITY.PARIS
  }, {
    id: 1,
    mark: ``,
    image: `apartment-01.jpg`,
    priceValue: 50,
    priceText: `night`,
    isBookmark: true,
    rating: 60,
    title: `Houseboat on IJsselmeer in Amsterdam`,
    type: `Shared room`,
    coordinates: [52.399553943508, 4.87309666406198],
    city: CITY.PARIS
  }, {
    id: 2,
    mark: `Premium`,
    image: `apartment-03.jpg`,
    priceValue: 151,
    priceText: `night`,
    isBookmark: false,
    rating: 80,
    title: `Amstel Rembrandtplein`,
    type: `Apartment`,
    coordinates: [52.3809553943508, 4.909309666406198],
    city: CITY.COLOGNE
  }, {
    id: 3,
    mark: ``,
    image: `room.jpg`,
    priceValue: 32,
    priceText: `night`,
    isBookmark: true,
    rating: 100,
    title: `Room with a View on the park.`,
    type: `Private room`,
    coordinates: [52.3709553943508, 4.919309666406198],
    city: CITY.COLOGNE
  }, {
    id: 4,
    mark: `Premium`,
    image: `apartment-02.jpg`,
    priceValue: 120,
    priceText: `night`,
    isBookmark: false,
    rating: 100,
    title: `Luxury Tiny House, flowerbulb region nearby A'dam`,
    type: `Apartment`,
    coordinates: [52.4009553943508, 4.86309666406198],
    city: CITY.BRUSSELS
  }, {
    id: 5,
    mark: ``,
    image: `apartment-01.jpg`,
    priceValue: 50,
    priceText: `night`,
    isBookmark: true,
    rating: 60,
    title: `Houseboat on IJsselmeer in Amsterdam`,
    type: `Shared room`,
    coordinates: [52.399553943508, 4.87309666406198],
    city: CITY.AMSTERDAM
  }, {
    id: 6,
    mark: `Premium`,
    image: `apartment-03.jpg`,
    priceValue: 151,
    priceText: `night`,
    isBookmark: false,
    rating: 80,
    title: `Amstel Rembrandtplein`,
    type: `Apartment`,
    coordinates: [52.3809553943508, 4.909309666406198],
    city: CITY.HAMBURG
  }, {
    id: 7,
    mark: ``,
    image: `room.jpg`,
    priceValue: 32,
    priceText: `night`,
    isBookmark: true,
    rating: 100,
    title: `Room with a View on the park.`,
    type: `Private room`,
    coordinates: [52.3709553943508, 4.919309666406198],
    city: CITY.DUSSELDORF
  }
];

export default {cities, rentalOffers, currentCity};
