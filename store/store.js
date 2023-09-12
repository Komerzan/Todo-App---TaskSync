import { configureStore } from '@reduxjs/toolkit'
import ListsSlice from './Features/ListsSlice'
import TasksSlice from './Features/TasksSlice'
export const store = configureStore({
  reducer: {
    lists : ListsSlice,
    tasks : TasksSlice
  },
})