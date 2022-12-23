import { configureStore } from "@reduxjs/toolkit";
import RootReducers from "./reducers";
 const store = configureStore({
    reducer: RootReducers})
export default store;