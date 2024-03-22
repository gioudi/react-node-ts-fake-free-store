/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../service";

interface SitesState {
  loading: boolean;
  error: null | string;
  data: any[];
}

const initialState: SitesState = {
  loading: false,
  error: null,
  data: [],
};

export const fetchSites = createAsyncThunk(
  "sites/fetchSites",
  async (payload: string) => {
    const response = await fetch(API.getSites(payload));
    const data = await response.json();
    return data;
  },
);

const siteSlice = createSlice({
  name: "sites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSites.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || `Error message`;
      });
  },
});

export default siteSlice.reducer;
