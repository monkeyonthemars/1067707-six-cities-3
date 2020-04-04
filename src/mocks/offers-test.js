const CITY = {
  PARIS: {
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    },
    name: `Paris`
  },
  COLOGNE: {
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
    name: `Cologne`
  },
  BRUSSELS: {
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    },
    name: `Brussels`
  },
  AMSTERDAM: {
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    },
    name: `Amsterdam`
  },
  HAMBURG: {
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    },
    name: `Hamburg`
  },
  DUSSELDORF: {
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    },
    name: `Dusseldorf`
  }
};

const cities = [
  {
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    },
    name: `Paris`
  },
  {
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
    name: `Cologne`
  },
  {
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    },
    name: `Brussels`
  },
  {
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    },
    name: `Amsterdam`
  },
  {
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    },
    name: `Hamburg`
  },
  {
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    },
    name: `Dusseldorf`
  }
];

const currentCity = {
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  },
  name: `Paris`
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
    city: CITY.PARIS,
    bedrooms: 1,
    description: `Luxury Tiny House, flowerbulb region nearby A'dam`,
    goods: [`Washer`, `Breakfast`, `Air conditioning`, `Laptop friendly workspace`],
    // host: {
    //   avatar_url: `img/avatar-angelina.jpg`,
    //   id: 25,
    //   is_pro: true,
    //   name: `Angelina`
    // },
    images: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
    maxAdults: 1,
    ratingText: 4
  },
  // {
  //   id: 1,
  //   mark: ``,
  //   image: `apartment-01.jpg`,
  //   priceValue: 50,
  //   priceText: `night`,
  //   isBookmark: true,
  //   rating: 60,
  //   title: `Houseboat on IJsselmeer in Amsterdam`,
  //   type: `Shared room`,
  //   coordinates: [52.399553943508, 4.87309666406198],
  //   city: CITY.PARIS,
  //   bedrooms: 1
  // }, {
  //   id: 2,
  //   mark: `Premium`,
  //   image: `apartment-03.jpg`,
  //   priceValue: 151,
  //   priceText: `night`,
  //   isBookmark: false,
  //   rating: 80,
  //   title: `Amstel Rembrandtplein`,
  //   type: `Apartment`,
  //   coordinates: [52.3809553943508, 4.909309666406198],
  //   city: CITY.COLOGNE,
  //   bedrooms: 1
  // }, {
  //   id: 3,
  //   mark: ``,
  //   image: `room.jpg`,
  //   priceValue: 32,
  //   priceText: `night`,
  //   isBookmark: true,
  //   rating: 100,
  //   title: `Room with a View on the park.`,
  //   type: `Private room`,
  //   coordinates: [52.3709553943508, 4.919309666406198],
  //   city: CITY.COLOGNE,
  //   bedrooms: 2
  // }, {
  //   id: 4,
  //   mark: `Premium`,
  //   image: `apartment-02.jpg`,
  //   priceValue: 120,
  //   priceText: `night`,
  //   isBookmark: false,
  //   rating: 100,
  //   title: `Luxury Tiny House, flowerbulb region nearby A'dam`,
  //   type: `Apartment`,
  //   coordinates: [52.4009553943508, 4.86309666406198],
  //   city: CITY.BRUSSELS,
  //   bedrooms: 2
  // }, {
  //   id: 5,
  //   mark: ``,
  //   image: `apartment-01.jpg`,
  //   priceValue: 50,
  //   priceText: `night`,
  //   isBookmark: true,
  //   rating: 60,
  //   title: `Houseboat on IJsselmeer in Amsterdam`,
  //   type: `Shared room`,
  //   coordinates: [52.399553943508, 4.87309666406198],
  //   city: CITY.AMSTERDAM,
  //   bedrooms: 1
  // }, {
  //   id: 6,
  //   mark: `Premium`,
  //   image: `apartment-03.jpg`,
  //   priceValue: 151,
  //   priceText: `night`,
  //   isBookmark: false,
  //   rating: 80,
  //   title: `Amstel Rembrandtplein`,
  //   type: `Apartment`,
  //   coordinates: [52.3809553943508, 4.909309666406198],
  //   city: CITY.HAMBURG,
  //   bedrooms: 1
  // }, {
  //   id: 7,
  //   mark: ``,
  //   image: `room.jpg`,
  //   priceValue: 32,
  //   priceText: `night`,
  //   isBookmark: true,
  //   rating: 100,
  //   title: `Room with a View on the park.`,
  //   type: `Private room`,
  //   coordinates: [52.3709553943508, 4.919309666406198],
  //   city: CITY.DUSSELDORF,
  //   bedrooms: 3
  // }
];

const email = `test@test.com`;

export default {cities, rentalOffers, currentCity, email};
