import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const contactSlice = createSlice({
  name: 'contact',
  initialState: { contact: [1, 2, 3, 4] },
  redusers: {
    addContact(state, action) {
      console.log(state);
      console.log(action);
      state.contact.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    remove() {},
    filter() {},
  },
});

export const { addContact } = contactSlice.actions;

console.log(contactSlice.reducer);
export default contactSlice.reducer;
// console.log(state);
//       console.log(action);
//       return (state.contact = [
//         ...state,
//         {
//           id: nanoid(),
//           name: action.payload.name,
//           number: action.payload.number,
//         },
//       ]);
