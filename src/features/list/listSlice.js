import {createSlice} from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "lists",
  initialState: {
    value: {},
  },
  reducers: {
    setLists: (state, action) => {
      return {
        ...state,
        value: {
          ...action.payload,
        },
      };
    },
    updateList: (state, action) => {
      return {
        ...state,
        value: {...state.value, [action.payload.id]: action.payload},
      };
    },
  },
});

export const {setLists, updateList} = listSlice.actions;

export default listSlice.reducer;
