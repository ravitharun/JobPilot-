import { configureStore } from "@reduxjs/toolkit";
import ThemeSlicer from "./ThemeSlicer";
import Naviagtion from "./Navigation";

export const store = configureStore({
    reducer: {
        counter: ThemeSlicer,
        navigationPages: Naviagtion

    }
});