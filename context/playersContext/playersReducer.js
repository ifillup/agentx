export default (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        ...state,
        players: [action.payload, ...state.players],
      };
    case 'ADD_ACCOUNT': //method needs work ;(
      return {
        ...state,
        players: [
          ...state.players,
          { player: action.payload.player, account: action.payload.account },
        ],
      };
    default:
      return state;
  }
};
