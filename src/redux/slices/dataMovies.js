import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const dataMovies = createSlice({
  name: "dataMovies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.unshift(action.payload);
    },
    removeAllMovies: (state) => {
      state.movies = [];
    },
    deleteMovie: (state, action) => {
      console.log(action.payload);
      const newData = state.movies.filter(
        (movie) => movie.nameMovie !== action.payload
      );
      console.log(newData);
      state.movies = newData;
    },
    // updateDataUser: (state, action) => {
    //   const { email, fullname, newEmail, phoneNumber, password } =
    //     action.payload;
    //   let userFind = state.users.find((user) => user.email === email);
    //   if (userFind) {
    //     userFind.fullname = fullname;
    //     userFind.email = newEmail;
    //     userFind.phoneNumber = phoneNumber;
    //     userFind.password = password;
    //   }
    // },
  },
});

export const { addMovie, removeAll, deleteMovie } = dataMovies.actions;
export default dataMovies.reducer;
