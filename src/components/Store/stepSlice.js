import { createSlice } from '@reduxjs/toolkit';

const stepSlice = createSlice({
  name: 'step',
  initialState: {},
  reducers: {
    stepAct(state, action) {
      return { ...state, name: action.payload };
    },
    stepDef: state => {
      return state;
    },
  },
});

const contactSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
  },
});

export const reducerStep = stepSlice.reducer;
export const { stepAct } = stepSlice.actions;

export const reducerContact = contactSlice.reducer;
export const { addContact } = contactSlice.actions;
