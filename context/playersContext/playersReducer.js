export default (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        ...state,
        players: [action.payload, ...state.players],
      };
    case 'ADD_ACCOUNT':
      return {
        ...state,
        players: state.players.map((item) =>
          item.player === action.payload.playerName
            ? {
                player: action.payload.playerName,
                accounts: [action.payload.account, ...item.accounts],
              }
            : item
        ),
      };
    default:
      return state;
  }
};
