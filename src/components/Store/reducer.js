import { reducerContact, reducerStep, reducerSlice } from './contactSlice';
import { Step } from 'components/Step/Step';
import { createReducer } from '@reduxjs/toolkit';
console.log(reducerContact);
export const reducer = {
  contact: reducerContact,
  filter: reducerSlice,
  stepAct: reducerStep,
};

// export const reducer = createReducer(0, {
//   [App.addContact]: (state, action) => {
//     return { contact: [...state, action.payload] };
//   },
//   [Step.stepAct]: (state, action) => {
//     console.log(state);
//     return { ...state, step: action.payload };
//   },
// });
