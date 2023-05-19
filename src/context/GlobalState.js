import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// We need an initial state

const initialState = {
  transactions: [
    { id: 1, text: 'Book', amount: -15 },
    { id: 2, text: 'Salary', amount: 650 },
    { id: 3, text: 'Phone case', amount: -25 },
    { id: 4, text: 'Video game', amount: -80 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);
// Provider component (provides state and actions to the components its wrapped around)
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
