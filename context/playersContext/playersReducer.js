export default (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        ...state,
        players: [action.payload, ...state.players],
      };
    default:
      return state;
  }
};
