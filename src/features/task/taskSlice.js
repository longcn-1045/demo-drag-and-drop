import {createSlice} from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    value: {},
  },
  reducers: {
    setTasks: (state, action) => {
      return {...state, value: {...action.payload}};
    },
  },
});

export const {setTasks} = taskSlice.actions;

export default taskSlice.reducer;
