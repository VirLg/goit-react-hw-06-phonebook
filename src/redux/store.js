import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contact',
  initialStata: { contact: [] },
  reducers: {
    addContact(state, action) {
      console.log(state);
      console.log(action);
      state.contact = [
        ...state,
        {
          id: nanoid(),
          name: action.payload.name,
          number: action.payload.number,
        },
      ];
      return [...state, action.payload];
    },
    remove() {},
    filter() {},
  },
});

export const { addContact } = contactSlice.actions;
// export default contactSlice.reducer
export const store = configureStore({
  reduser: {
    contactsStore: contactSlice.reducer,
  },
});
