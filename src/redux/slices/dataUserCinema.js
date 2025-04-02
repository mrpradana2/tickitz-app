import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCinema: null,
};

const dataUserCinema = createSlice({
  name: "dataUserCinema",
  initialState,
  reducers: {
    userSelectCinema: (state, action) => {
      state.userCinema = action.payload;
    },
    userResetCinema: (state) => {
      state.userCinema = null;
    },
  },
});

export const { userSelectCinema, userResetCinema } = dataUserCinema.actions;
export default dataUserCinema.reducer;
