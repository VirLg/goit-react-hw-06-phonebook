import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
// import { reducer } from './reducer';

// const reducer = (state, action) => {
//   console.log('action', action);
//   switch (action.type) {
//     case 'addContact':
//       return { contact: [...state, action.payload] };
//     case 'setStep':
//       return { ...state, step: action.payload };
//     default:
//       return state;
//   }
// };
// export const store = createStore(reducer, { contact: [], step: 1 });

export const store = configureStore({ reducer });

// store.dispatch({ type: 'addContact', payload: { name: 'ol', number: '555' } });
// // export const store = configureStore({ reducer });
// console.log(store.getState());
