import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// import { reducer } from './reducer';

const reducer = (state, action) => {
  console.log('action', action);
  switch (action.type) {
    case 'addContact':
      return [...state, action.payload];

    default:
      return state;
  }
};
export const store = createStore(reducer, []);
// store.dispatch({ type: 'addContact', payload: { name: 'ol', number: '555' } });
// // export const store = configureStore({ reducer });
// console.log(store.getState());
