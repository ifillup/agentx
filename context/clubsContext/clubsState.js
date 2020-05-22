import { createContext, useReducer } from 'react';
import ClubsReducer from './clubsReducer';

// Initial state
const initialState = {
  clubs: [],
};

// Create context
export const ClubsContext = createContext(initialState);

// Provider component
export const ClubsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ClubsReducer, initialState);

  // Actions

  function addClub(club) {
    dispatch({
      type: 'ADD_CLUB',
      payload: club,
    });
  }

  return (
    <ClubsContext.Provider
      value={{
        clubs: state.clubs,
        addClub,
      }}
    >
      {children}
    </ClubsContext.Provider>
  );
};
