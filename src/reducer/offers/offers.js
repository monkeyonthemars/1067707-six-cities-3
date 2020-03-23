const initialState = {
  activePlaceCard: -1
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const ActionType = {
  SET_ACTIVE_PLACE_CARD: `SET_ACTIVE_PLACE_CARD`,
  REMOVE_ACTIVE_PLACE_CARD: `REMOVE_ACTIVE_PLACE_CARD`
};

const ActionCreator = {
  setActivePlaceCard: (id) => ({
    type: ActionType.SET_ACTIVE_PLACE_CARD,
    payload: id
  }),
  removeActivePlaceCard: () => ({
    type: ActionType.REMOVE_ACTIVE_PLACE_CARD,
    payload: -1
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_PLACE_CARD:
      return extend(state, {
        activePlaceCard: action.payload
      });

    case ActionType.REMOVE_ACTIVE_PLACE_CARD:
      return extend(state, {
        activePlaceCard: -1
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
