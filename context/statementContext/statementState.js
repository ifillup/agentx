import { createContext, useReducer } from 'react';
import StatementReducer from './statementReducer';

// Initial state
const initialState = {
  transactions: [],
};

// Create context
export const StatementContext = createContext(initialState);

// Provider component
export const StatementProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StatementReducer, initialState);

  // Actions

  function addTransactions(transactions) {
    dispatch({
      type: 'ADD_TRANSACTIONS',
      payload: transactions,
    });

    // localStorage.setItem('transactions', JSON.stringify(transactions));
  }

  // function tagPlayer() {
  //   dispatch({
  //     type: 'TAG_PLAYER',
  //     payload: transactions,
  //   });
  // }

  return (
    <StatementContext.Provider
      value={{
        transactions: state.transactions,
        addTransactions,
      }}
    >
      {children}
    </StatementContext.Provider>
  );
};
