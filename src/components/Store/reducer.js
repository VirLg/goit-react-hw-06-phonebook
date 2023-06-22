import { reducerContact, reducerStep } from './stepSlice';
import { Step } from 'components/Step/Step';

export const reducer = {
  contact: reducerContact,
  stepAct: reducerStep,
};

// export const reducer = createReducer(0, {
//   // [App.addContact]: (state, action) => {
//   //   return { contact: [...state, action.payload] };
//   // },
//   [Step.stepAct]: (state, action) => {
//     console.log(state);
//     return { ...state, step: action.payload };
//   },
// });
