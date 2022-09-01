import { configureStore } from '@reduxjs/toolkit';

import reducers from "./Reducers/bankReducer";

export const store = configureStore({
reducer: {
bank: reducers,
},
});