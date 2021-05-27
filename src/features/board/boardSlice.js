import {createSlice} from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "boards",
  initialState: {
    value: {},
  },
  reducers: {
    setBoards: (state, action) => {
      return {...state, value: {...action.payload}};
    },
  },
});

export const {setBoards} = boardSlice.actions;

export default boardSlice.reducer;
