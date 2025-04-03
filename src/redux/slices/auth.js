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
    updateDataUser: (state, action) => {
      const { email, fullname, newEmail, phoneNumber, password } =
        action.payload;
      let userFind = state.users.find((user) => user.email === email);
      if (userFind) {
        userFind.fullname = fullname;
        userFind.email = newEmail;
        userFind.phoneNumber = phoneNumber;
        userFind.password = password;
      }
    },
  },
});

export const { addUser, removeAll, updateDataUser } = dataUsers.actions;
export default dataUsers.reducer;
