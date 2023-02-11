import React, { createContext, useReducer } from 'react'

import TransactionReducer from './TransactionReducer'

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: 'Salary', amount: 15000 },
    { id: 2, text: 'Food', amount: -4000 },
    { id: 3, text: 'Clothing', amount: -2500 },
    { id: 4, text: 'Travel', amount: -1200 },
    { id: 5, text: 'Medicine', amount: -800 }
  ]
}

// Create context
export const TransactionState = createContext(initialState)

// Provider component
export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (
    <TransactionState.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </TransactionState.Provider>
  )
}