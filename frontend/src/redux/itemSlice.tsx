import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import API from "../service";

interface ItemsState {
    loading: boolean;
    error: null | string;
    data: object; 
    itemDescription: object
}

const initialState: ItemsState = {
    loading: false,
    error: null,
    data: {},
    itemDescription: {}
}

export const fetchItem = createAsyncThunk('item/fetchItem', async (payload: string) => {
    const response = await fetch(API.getItem(payload));
    const data = await response.json();
    return data;
});

export const fetchItemDescription = createAsyncThunk('item/fetchItemDescription', async (payload: string) => {
    const response = await fetch(API.getItemDescription(payload));
    const data = await response.json();
    return data;
});

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItem.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchItem.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || `Error message`;
            })
            .addCase(fetchItemDescription.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchItemDescription.fulfilled, (state, action) => {
                state.loading = false;
                state.itemDescription = action.payload;
            })
            .addCase(fetchItemDescription.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || `Error message`;
            });
    }
});

export default itemSlice.reducer;