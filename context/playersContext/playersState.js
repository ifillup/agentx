import { createContext, useReducer } from 'react';
import PlayersReducer from './playersReducer';

// Initial state
const initialState = {
  players: [],
};

// Create context
export const PlayersContext = createContext(initialState);

// Provider component
export const PlayersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PlayersReducer, initialState);

  // Actions

  function addPlayer(player) {
    dispatch({
      type: 'ADD_PLAYER',
      payload: player,
    });
  }
  function addAccount(player, account) {
    dispatch({
      type: 'ADD_ACCOUNT',
      payload: { player, account },
    });
  }

  return (
    <PlayersContext.Provider
      value={{
        players: state.players,
        addPlayer,
        addAccount,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};
