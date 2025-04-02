import { createSlice } from "@reduxjs/toolkit";
import { use } from "react";

const initialState = {
  orders: [],
};

const dataOrderMovie = createSlice({
  name: "dataOrderMovie",
  initialState,
  reducers: {
    addOrderMovie: (state, action) => {
      state.orders.push(action.payload);
    },
    removeAllOrder: (state) => {
      state.orders = [];
    },
    addHistoryOrder: (state, action) => {
      const { email, newOrder } = action.payload;
      const user = state.orders.find((user) => user.email === email);
      if (user) {
        user.orders.push(newOrder);
      }
    },
  },
});

export const { addOrderMovie, removeAllOrder, addHistoryOrder } =
  dataOrderMovie.actions;
export default dataOrderMovie.reducer;
