import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllMovies, getMovieById, deleteMovie } from "../API/movieAPI";

const initialState = {
  movies: [],
  selectedMovie: null,
  errors: null,
  isLoading: false
};

// Actions === AsyncThunk handls the async work:

export const getAllMoviesAction = createAsyncThunk(
  "movie/getAllMovies",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAllMovies();
      console.log(res.data);
      return res.data;
      // dispatch action: (fulfilled) case will work
    } catch (err) {
      return rejectWithValue(err.message);
      // dispatch action: (rejected) case will work
    }
  }
);

export const getMovieByIdAction = createAsyncThunk(
  "movie/getMovieById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await getMovieById(id);
      console.log(res.data);
      return res.data;
      // dispatch action: (fulfilled) case will work
    } catch (err) {
      return rejectWithValue(err.message);
      // dispatch action: (rejected) case will work
    }
  }
);

export const deleteMovieAction = createAsyncThunk(
  "movie/deleteMovie",
  async (id, { rejectWithValue }) => {
    try {
      await deleteMovie(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,

  reducer: {},
  extraReducers: builder => {
    builder
      .addCase(getAllMoviesAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllMoviesAction.fulfilled, (state, action) => {
        // console.log(action);
        // console.log(action.payload);
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(getAllMoviesAction.rejected, (state, action) => {
        // لو حصل مشكله ف السرفر
        // console.log(action.payload);
        state.isLoading = false;
        state.errors = action.payload.name;
      });
    builder.addCase(getMovieByIdAction.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getMovieByIdAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedMovie = action.payload;
      console.log(action);
    });
    builder.addCase(getMovieByIdAction.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload.name;
    });
    // Handle deleteMovieAction
    builder.addCase(deleteMovieAction.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteMovieAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
    });
    builder.addCase(deleteMovieAction.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload.name;
    });
  }
});

export const movieReducer = movieSlice.reducer;
