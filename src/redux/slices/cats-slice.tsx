import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface IinitialState {
  status: null | "pending" | "fulfilled" | "rejected";
  payload: any;
  errors: any;
}

interface IGetCatsImages {
  page: number;
  categoryId: number;
}

export const getCatsImages = createAsyncThunk(
  "cats/getInfo",
  async ({ page, categoryId }: IGetCatsImages) => {
    const response = axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${categoryId} `,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return (await response).data;
  }
);

export const catsSlice = createSlice({
  name: "cats",
  initialState: {
    status: null,
    payload: [],
    errors: {},
  } as IinitialState,
  reducers: {},
  extraReducers: {
    [getCatsImages.pending.type]: (state: IinitialState, _action) => {
      if (state.payload.length === 0) {
        state.status = "pending";
      }
    },
    [getCatsImages.fulfilled.type]: (state: IinitialState, { payload }) => {
      state.status = "fulfilled";
      state.payload = [...state.payload, payload];
    },
    [getCatsImages.rejected.type]: (state: IinitialState, _action) => {
      state.status = "rejected";
      state.errors = "Oops something went wrong !!!";
    },
  },
});
