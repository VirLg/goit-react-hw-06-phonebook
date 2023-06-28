import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const store = configureStore({
  reducer,
});

// : {
//     contact: '',
//   },

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
