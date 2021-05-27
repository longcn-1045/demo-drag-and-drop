import {configureStore} from "@reduxjs/toolkit";
import boardReducer from "./../features/board/boardSlice";
import listReducer from "./../features/list/listSlice";
import taskReducer from "./../features/task/taskSlice";

const store = configureStore({
  reducer: {
    boards: boardReducer,
    lists: listReducer,
    tasks: taskReducer,
  },
});

export default store;
