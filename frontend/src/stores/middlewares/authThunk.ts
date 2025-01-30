import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuthToken,
  setAuthToken,
  deleteAuthToken,
} from "../../utils/cookie/auth";
import api from "../../services/api";

export const signOut = createAsyncThunk(
  "auth/signOut",
  async (): Promise<void> => {
    deleteAuthToken();
  },
);

export const signIn = createAsyncThunk<
  { access_token: string; user: any },
  { email: string; password: string }
>("auth/signIn", async (payload, { rejectWithValue }) => {
  try {
    const response = await api.post("auth/login", payload);
    console.log(response);
    setAuthToken(response.data.access_token);
    return response.data;
  } catch (e) {
    throw rejectWithValue(e);
  }
});

export const signUp = createAsyncThunk;

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (
    _,
    { rejectWithValue },
  ): Promise<{ user: any; access_token: string }> => {
    try {
      const accessToken = await getAuthToken();
      api.defaults.headers.Authorization = `Bearer ${accessToken}`;
      const response = await api.get("auth/profile");
      return { ...response.data, access_token: accessToken };
    } catch (e) {
      deleteAuthToken();
      throw rejectWithValue(e);
    }
  },
);
