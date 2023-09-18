import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, listTitle: "First list"},
  { id: 2, listTitle: "Second list"}
];

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers:{
    addNewList : (state , action) => {
      state.push(action.payload)
    } ,
    removeList : (state , action) => {
      return state.filter((item) => item.id !== action.payload)
    } ,
  }
});
export const {addNewList , removeList} = listsSlice.actions
export default listsSlice.reducer;
