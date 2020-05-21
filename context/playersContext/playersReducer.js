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
        players: state.players.map((item) =>
          item.player === action.payload.playerName
            ? {
                player: action.payload.playerName,
                accounts: [
                  action.payload.account,
                  ...item.accounts, //can be undefined
                ],
              }
            : item
        ),
      };
    default:
      return state;
  }
};
// ...state.players,
// { name: action.payload.player, account: action.payload.account }, ///accounts are an array add it
