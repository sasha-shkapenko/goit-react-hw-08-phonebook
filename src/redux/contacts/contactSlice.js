import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'Filter',
    initialState: '',
    reducers: {
        changeFilter(state, { payload }) {
            state.filter = payload;
        },
    }
});
export const { changeFilter } = filterSlice.actions;
