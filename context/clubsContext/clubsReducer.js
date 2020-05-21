export default (state, action) => {
  switch (action.type) {
    case 'ADD_CLUB':
      return {
        ...state,
        players: [action.payload, ...state.players],
      };
    default:
      return state;
  }
};
