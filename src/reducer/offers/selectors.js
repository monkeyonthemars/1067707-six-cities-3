import NameSpace from "../name-space.js";

export const getActivePlaceCard = (state) => {
  return state[NameSpace.OFFERS].activePlaceCard;
};
