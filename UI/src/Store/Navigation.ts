import { createSlice } from "@reduxjs/toolkit";

const Naviagtion = createSlice({
    name: "Navigation",

    initialState: {
        value: "Dashboard"
    },

    reducers: {
        UpdateNaviagtion: (state, action) => {



            state.value = action.payload
        }
    }
});

export const { UpdateNaviagtion } = Naviagtion.actions;

export default Naviagtion.reducer;