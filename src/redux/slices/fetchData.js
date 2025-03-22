import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const VITE_AUTH = import.meta.env.VITE_AUTH;
const VITE_URL_NOWPLAYING = import.meta.env.VITE_URL_NOWPLAYING;
import getGenreMovies from "../../api/getGenreMovie.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${VITE_AUTH}`,
  },
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const response = await fetch(VITE_URL_NOWPLAYING, options);
    if (!response.ok) throw new Error("Fetch data failed");

    const dataMovies = await response.json();
    const dataListMovies = dataMovies.results;
    const genres = await getGenreMovies();

    const newData = dataListMovies.map((movie) => {
      const movieGenres = genres.find((genre) => genre.title === movie.title);
      return movieGenres ? { ...movie, genres: movieGenres.genres } : movie;
    });

    return newData;
  } catch (error) {
    throw error;
  }
});

const initialState = {
  item: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.item = payload;
      })
      .addCase(fetchData.rejected, (state, { error }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = error.message;
      });
  },
});

export default dataSlice.reducer;
