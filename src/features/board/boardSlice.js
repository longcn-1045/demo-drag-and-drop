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
    updateBoard: (state, action) => {
      return {
        ...state,
        value: {...state.value, [action.payload.id]: action.payload},
      };
    },
  },
});

export const {setBoards, updateBoard} = boardSlice.actions;

export default boardSlice.reducer;
