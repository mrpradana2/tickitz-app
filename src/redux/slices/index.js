import dataUsers from "./auth.js";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "users",
  storage,
};

const persistedReducerDataUsers = persistReducer(persistConfig, dataUsers);

const reducer = combineReducers({
  dataUsers: persistedReducerDataUsers,
});

export default reducer;
