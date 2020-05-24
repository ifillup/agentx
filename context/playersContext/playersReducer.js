export default (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return {
        ...state,
        players: [...state.players, action.payload],
      };
    case 'ADD_ACCOUNT':
      return {
        ...state,
        players: state.players.map((player) =>
          player.id === action.payload.player.id
            ? {
                ...player,
                accounts: [...player.accounts, action.payload],
              }
            : player
        ),
      };
    case 'LOAD_PLAYERS':
      return {
        ...state,
        players: [...action.payload],
      };
    case 'DELETE_PLAYER':
      return {
        ...state,
        players: state.players.filter(
          (player) => player.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
