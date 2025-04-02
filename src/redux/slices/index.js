import dataUsers from "./auth.js";
import dataUserLogin from "./userAuth.js";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "users",
  storage,
};

const persistConfigUserLogin = {
  key: "userLogin",
  storage,
};

const persistedReducerDataUsers = persistReducer(persistConfig, dataUsers);
const persistedReducerUserLogin = persistReducer(
  persistConfigUserLogin,
  dataUserLogin
);

const reducer = combineReducers({
  dataUsers: persistedReducerDataUsers,
  dataUserLogin: persistedReducerUserLogin,
});

export default reducer;
