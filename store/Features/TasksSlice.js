import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, content: "Need to watch breaking bad", isDone: false, listID: 1  , date : new Date()},
  { id: 2, content: "Need to learn JS", isDone: true, listID: 2  , date : new Date()},
  { id: 1, content: "Need to watch breaking bad", isDone: false, listID: 1  , date : new Date()},
  { id: 2, content: "Need to learn JS", isDone: true, listID: 2  , date : new Date()},
  { id: 1, content: "Need to watch breaking bad", isDone: false, listID: 1  , date : new Date()},
  { id: 2, content: "Need to learn JS", isDone: true, listID: 2  , date : new Date()},
  { id: 1, content: "Need to watch breaking bad", isDone: false, listID: 1  , date : new Date()},
  { id: 2, content: "Need to learn JS", isDone: true, listID: 2  , date : new Date()},
]

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers : {
    addNewTask : (state , action) => {
      state.push(action.payload)
    }
  }
});
export const { addNewTask} = tasksSlice.actions
export default tasksSlice.reducer;
