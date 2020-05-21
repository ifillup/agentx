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

  function addPlayer(playerName) {
    dispatch({
      type: 'ADD_PLAYER',
      payload: { player: playerName, accounts: [] },
    });
  }
  function addAccount(playerName, account) {
    dispatch({
      type: 'ADD_ACCOUNT',
      payload: { playerName, account },
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
