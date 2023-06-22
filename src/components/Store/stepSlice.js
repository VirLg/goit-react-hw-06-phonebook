const { createSlice } = require('@reduxjs/toolkit');

const stapSlice = createSlice({
  name: 'step',
  initialState: 0,
  redusers: {
    stepAct: (state, action) => {
      return { ...state, step: action.payload };
    },
  },
});

const contactSlice = createSlice({
  name: 'contact',
  initialState: [],
  redusers: {
    addContact: (state, action) => {
      return { contact: [...state, action.payload] };
    },
  },
});

export const reducerStap = stapSlice.reducer;
export const reducerContact = contactSlice.reducer;
export const { stepAct } = stapSlice.actions;
export const { addContact } = contactSlice.actions;
