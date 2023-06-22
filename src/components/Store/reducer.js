// export const reducer = () => {
//   //   addContact: contactReducer;
// };
import { Step } from 'components/Step/Step';
import { createReducer } from '@reduxjs/toolkit';
import App from 'App';
export const reducer = createReducer('', {
  [App.addContact]: (state, action) => {
    return { contact: [...state, action.payload] };
  },
  [Step.stepAct]: (state, action) => {
    return { ...state, step: action.payload };
  },
});
// console.log(Step.stepAct.toString());
