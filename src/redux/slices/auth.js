import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const dataUsers = createSlice({
  name: "dataUsers",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeAll: (state) => {
      state.users = [];
    },
  },
});

export const { addUser, removeAll } = dataUsers.actions;
export default dataUsers.reducer;
