import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, content: "Need          to watch breaking bad1", isDone: true, listID: 1 },
  { id: 2, content: "Need to learn JS2", isDone: false, listID: 2 },
  { id: 3, content: "Need to watch breaking bad3", isDone: true, listID: 1 },
  { id: 4, content: "Need to learn JS4", isDone: false, listID: 2 },
  { id: 5, content: "Need to watch breaking bad5", isDone: false, listID: 1 },
  {
    id: 6,
    content: "Need to learn JSNeed to learn JS6",
    isDone: false,
    listID: 2,
  },
  { id: 7, content: "Need to watch breaking bad7", isDone: false, listID: 1 },
  { id: 8, content: "Need to learn JS8", isDone: false, listID: 2 },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      const newState = [action.payload, ...state];
      return newState;
    },
    removeTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    changeStatus: (state, action) => {
      const updatedState = state.map((item) => {
        if (item.id == action.payload) {
          return { ...item, isDone: !item.isDone };
        }
        return item
      });
      return updatedState
    },
    changeContent: (state, action) => {
      const updatedState = state.map((item) => {
        if (item.id == action.payload.id) {
          return {...item ,content : action.payload.content}
        }
        return item
      });

      return updatedState
    },
  },
});
export const { addNewTask, removeTask, changeStatus , changeContent } = tasksSlice.actions;
export default tasksSlice.reducer;
