import { createSlice } from "@reduxjs/toolkit";

const Theme = createSlice({
    name: "Theme",

    initialState: {
        value: false
    },

    reducers: {
        UpdateTheme: (state) => { state.value = !state.value }
    }
});

export const { UpdateTheme } = Theme.actions;

export default Theme.reducer;