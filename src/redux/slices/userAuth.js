import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const dataUserLogin = createSlice({
  name: "dataUserLogin",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
    },
    userLogout: (state) => {
      state.user = null;
    },
  },
});

export const { userLogin, userLogout } = dataUserLogin.actions;
export default dataUserLogin.reducer;
