import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: "info",
  initialState: {
    data: null,
    country: "turkey",
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
  },
});

export default infoSlice.reducer;
export const { setData, setCountry } = infoSlice.actions;
