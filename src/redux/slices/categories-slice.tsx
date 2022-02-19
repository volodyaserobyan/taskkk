import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IinitialState {
  status: null | "pending" | "fulfilled" | "rejected";
  payload: any;
  errors: any;
}

export const getCategories = createAsyncThunk(
  "categories/getInfo",
  async () => {
    const response = axios.get(`https://api.thecatapi.com/v1/categories`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return (await response).data;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    status: null,
    payload: {},
    errors: {},
  } as IinitialState,
  reducers: {},
  extraReducers: {
    [getCategories.pending.type]: (state: IinitialState, _action) => {
      state.status = "pending";
    },
    [getCategories.fulfilled.type]: (state: IinitialState, { payload }) => {
      state.status = "fulfilled";
      state.payload = payload;
    },
    [getCategories.rejected.type]: (state: IinitialState, _action) => {
      state.status = "rejected";
      state.errors = "Oops something went wrong !!!";
    },
  },
});
