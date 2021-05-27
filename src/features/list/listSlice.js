import {createSlice} from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "lists",
  initialState: {
    value: {},
  },
  reducers: {
    setLists: (state, action) => {
      return {...state, value: {...action.payload}};
    },
  },
});

export const {setLists} = listSlice.actions;

export default listSlice.reducer;
