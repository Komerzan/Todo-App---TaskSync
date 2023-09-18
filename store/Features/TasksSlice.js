import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, content: "Need to watch breaking bad", isDone: false, listID: 1  },
  { id: 2, content: "Need to learn JS", isDone: true, listID: 2   },
  { id: 3, content: "Need to watch breaking bad", isDone: false, listID: 1  },
  { id: 4, content: "Need to learn JS", isDone: true, listID: 2  },
  { id: 5, content: "Need to watch breaking bad", isDone: false, listID: 1 },
  { id: 6, content: "Need to learn JSNeed to learn JS", isDone: true, listID: 2  },
  { id: 7, content: "Need to watch breaking bad", isDone: false, listID: 1 },
  { id: 8, content: "Need to learn JS", isDone: true, listID: 2  }
]



export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers : {
    addNewTask : (state , action) => {
      state.unshift(action.payload)
    },
    removeTask : (state , action) => {
      return state.filter((item) => item.id !== action.payload)
    },
  }
});
export const { addNewTask , removeTask } = tasksSlice.actions
export default tasksSlice.reducer;
