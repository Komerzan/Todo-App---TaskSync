import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, listTitle: "First list" , date : new Date() },
  { id: 2, listTitle: "Second list" , date : new Date() },
];

export const listsSlice = createSlice({
  name: "lists",
  initialState,
});

export default listsSlice.reducer;
