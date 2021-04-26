import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = [3];
//export const ExpenseTrackerContext = createContext(initialState);
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);
   
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }

    const addTransaction = (transactions) => {
        dispatch({type: 'ADD', payload: transactions })
    }
    console.log(transactions);

    return (
        <ExpenseTrackerContext.Provider value={{
                transactions,
                deleteTransaction, 
                addTransaction
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}