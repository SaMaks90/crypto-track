import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { ThemeName } from "../../types/theme";
import { defaultThemeName } from "../../const/theme";

export type ThemeState = {
  theme: ThemeName;
};

const initialState: ThemeState = {
  theme: defaultThemeName,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<ThemeName>) => {
      state.theme = action.payload;
    },
  },
});

// selectors
export const selectTheme = (state: RootState) => state.theme;
export default themeSlice.reducer;

// actions
export const { updateTheme } = themeSlice.actions;
