import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../api/movieApi'
import { APIKey } from '../../api/movieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async (term) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
        return response.data;
    });

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',
    async (term) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
        return response.data;
    });

export const fetchAsyncDetail = createAsyncThunk('movies/fetchAsyncDetail',
    async (id) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
        return response.data;
    });

const initialState = {
    movies: {},
    shows: {},
    detail: {}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedItem: (state)=>{
            state.detail = {};
        },  
    },
    extraReducers: {

        // Movie Fetching
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected!");
        },

        // Show Fetching
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, shows: payload };
        },

        // Detail Fetching
        [fetchAsyncDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched Successfully!");
            return { ...state, detail: payload };
        },
    },

});

export const { removeSelectedItem } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllDetail = (state) => state.movies.detail;
export default movieSlice.reducer;