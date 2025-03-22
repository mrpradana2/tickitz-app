import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/fetchData";

const store = configureStore({
  reducer: {
    data: dataReducer,
    dataMovieUpcoming: dataReducer,
  },
});

export default store;
