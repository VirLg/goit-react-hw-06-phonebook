import { reducerContact, reducerStap } from './stepSlice';

// export const reducer = createReducer('', {
//   [App.addContact]: (state, action) => {
//     return { contact: [...state, action.payload] };
//   },
//   [Step.stepAct]: (state, action) => {
//     return { ...state, step: action.payload };
//   },
// });
// console.log(Step.stepAct.toString());
export const reducer = {
  contact: reducerContact,
  step: reducerStap,
};
