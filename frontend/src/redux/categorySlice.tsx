import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../service";

interface CategoriesState {
  loading: boolean;
  error: null | string;
  data: any[];
}

const initialState: CategoriesState = {
  loading: false,
  error: null,
  data: [],
};

export const fetchCategories = createAsyncThunk(
  "item/fetchCategories",
  async (payload: string) => {
    const response = await fetch(API.getCategories(payload));
    const data = await response.json();
    return data;
  },
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || `Error message`;
      });
  },
});

export default categorySlice.reducer;
