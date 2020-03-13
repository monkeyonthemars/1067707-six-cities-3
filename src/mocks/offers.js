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
    coordinates: [48.914716, 2.369014],
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
    coordinates: [48.924716, 2.379014],
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
    coordinates: [53.541086, 9.983682],
    city: CITY.HAMBURG
  }, {
    id: 4,
    mark: `Premium`,
    image: `apartment-01.jpg`,
    priceValue: 120,
    priceText: `night`,
    isBookmark: false,
    rating: 80,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    coordinates: [50.945173, 6.943101],
    city: CITY.COLOGNE
  }, {
    id: 5,
    mark: ``,
    image: `room.jpg`,
    priceValue: 80,
    priceText: `night`,
    isBookmark: true,
    rating: 80,
    title: `Wood and stone place`,
    type: `Private room`,
    coordinates: [50.860346, 4.341721],
    city: CITY.BRUSSELS
  }, {
    id: 6,
    mark: ``,
    image: `apartment-02.jpg`,
    priceValue: 132,
    priceText: `night`,
    isBookmark: false,
    rating: 80,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
    coordinates: [51.327741, 6.783456],
    city: CITY.DUSSELDORF
  }, {
    id: 7,
    mark: `Premium`,
    image: `apartment-03.jpg`,
    priceValue: 180,
    priceText: `night`,
    isBookmark: false,
    rating: 100,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    coordinates: [51.237741, 6.753456],
    city: CITY.DUSSELDORF
  }
];
