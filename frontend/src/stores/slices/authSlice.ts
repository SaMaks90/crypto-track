import { createSlice } from "@reduxjs/toolkit";
import { IAuthInitialState } from "../../types/auth";
import { signOut, signIn, fetchUserData } from "../middlewares/authThunk";

const initialState: IAuthInitialState = {
  authToken: null,
  loading: false,
  userData: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder): void => {
    builder.addCase(signOut.fulfilled, (state): void => {
      state.loading = false;
      state.authToken = null;
      state.userData = {};
    });
    builder.addCase(signIn.pending, (state): void => {
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action): void => {
      const { access_token, user } = action.payload;
      state.loading = false;
      state.userData = user;
      state.authToken = access_token;
    });
    builder.addCase(signIn.rejected, (state): void => {
      state.loading = false;
    });
    builder.addCase(fetchUserData.pending, (state): void => {
      state.loading = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action): void => {
      const { user, access_token } = action.payload;
      state.loading = false;
      state.authToken = access_token;
      state.userData = user;
    });
    builder.addCase(fetchUserData.rejected, (state): void => {
      state.loading = false;
      state.authToken = null;
      state.userData = {};
    });
  },
});

export default authSlice.reducer;
