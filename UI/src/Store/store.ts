import { configureStore } from "@reduxjs/toolkit";
import ThemeSlicer from "./ThemeSlicer";

export const store = configureStore({
    reducer: {
        counter: ThemeSlicer
    }
});