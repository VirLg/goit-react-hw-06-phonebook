import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './slice';
console.log(contactReducer);
// export default contactSlice.reducer
export default configureStore({ reducer: { contact: contactReducer } });
