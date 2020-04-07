export const getOfferById = (offers, offerId) => {
  return offers.find((item) => {
    return item.id === offerId;
  });
};
