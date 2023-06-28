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
    removeContact(state, action) {
      return [...action.payload];
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(state, action) {
      return [...state, action.payload];

      // console.log(a);
      // return [...action.payload];
    },
  },
});

export const reducerStep = stepSlice.reducer;
export const { stepAct } = stepSlice.actions;

export const reducerContact = contactSlice.reducer;
console.log(reducerContact);
export const { addContact, removeContact } = contactSlice.actions;

export const reducerSlice = filterSlice.reducer;
export const { filterContact } = filterSlice.actions;
