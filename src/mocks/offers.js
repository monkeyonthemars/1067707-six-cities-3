const CITY = {
  PARIS: {
    coordinates: [48.904716, 2.359014],
    name: `PARIS`
  },
  COLOGNE: {
    coordinates: [50.935173, 6.953101],
    name: `COLOGNE`
  },
  BRUSSELS: {
    coordinates: [50.850346, 4.351721],
    name: `BRUSSELS`
  },
  AMSTERDAM: {
    coordinates: [52.38333, 4.9],
    name: `AMSTERDAM`
  },
  HAMBURG: {
    coordinates: [53.551086, 9.993682],
    name: `HAMBURG`
  },
  DUSSELDORF: {
    coordinates: [51.227741, 6.773456],
    name: `DUSSELDORF`
  }
};

export default [
  {
    id: 0,
    mark: `Premium`,
    image: `apartment-01.jpg`,
    priceValue: 120,
    priceText: `night`,
    isBookmark: false,
    rating: 80,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    coordinates: [52.3909553943508, 4.85309666406198],
    city: CITY.AMSTERDAM
  }, {
    id: 1,
    mark: ``,
    image: `room.jpg`,
    priceValue: 80,
    priceText: `night`,
    isBookmark: true,
    rating: 80,
    title: `Wood and stone place`,
    type: `Private room`,
    city: CITY.PARIS
  }, {
    id: 2,
    mark: ``,
    image: `apartment-02.jpg`,
    priceValue: 132,
    priceText: `night`,
    isBookmark: false,
    rating: 80,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    city: CITY.PARIS
  }, {
    id: 3,
    mark: `Premium`,
    image: `apartment-03.jpg`,
    priceValue: 180,
    priceText: `night`,
    isBookmark: false,
    rating: 100,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    city: CITY.HAMBURG
  }, {
    id: 0,
    mark: `Premium`,
    image: `apartment-01.jpg`,
    priceValue: 120,
    priceText: `night`,
    isBookmark: false,
    rating: 80,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    coordinates: [52.3909553943508, 4.85309666406198],
    city: CITY.COLOGNE
  }, {
    id: 1,
    mark: ``,
    image: `room.jpg`,
    priceValue: 80,
    priceText: `night`,
    isBookmark: true,
    rating: 80,
    title: `Wood and stone place`,
    type: `Private room`,
    city: CITY.BRUSSELS
  }, {
    id: 2,
    mark: ``,
    image: `apartment-02.jpg`,
    priceValue: 132,
    priceText: `night`,
    isBookmark: false,
    rating: 80,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    city: CITY.DUSSELDORF
  }, {
    id: 3,
    mark: `Premium`,
    image: `apartment-03.jpg`,
    priceValue: 180,
    priceText: `night`,
    isBookmark: false,
    rating: 100,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    city: CITY.DUSSELDORF
  }
];
