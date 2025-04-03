import { createSlice } from "@reduxjs/toolkit";

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
        user.orders.unshift(newOrder);
      }
    },
    changeOrderStatus: (state, action) => {
      const { email, date, time } = action.payload;
      const user = state.orders.find((user) => user.email === email);
      const order = user.orders.find(
        (order) => order.date === date && order.time === time
      );
      order.paid = true;
    },
  },
});

export const {
  addOrderMovie,
  removeAllOrder,
  addHistoryOrder,
  changeOrderStatus,
} = dataOrderMovie.actions;
export default dataOrderMovie.reducer;
