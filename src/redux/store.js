import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/index";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer,
});

export const persistor = persistStore(store);
