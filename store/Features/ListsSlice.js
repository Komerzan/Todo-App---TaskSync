import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, listTitle: "First list" , date :new Date().toISOString()},
  { id: 2, listTitle: "Second list", date : new Date().toISOString()}
];

export const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers:{
    addNewList : (state , action) => {
      const  updatedState = [action.payload , ...state]
      return updatedState
    } ,
    removeList : (state , action) => {
      return state.filter((item) => item.id !== action.payload)
    } ,
    changeTitle : (state , action) => {
     const newTitle = state.map(item => {
      if(item.id == action.payload.id){
        return {...item , listTitle : action.payload.title}
      }
      return item
     }
     )
     return newTitle
    }
  }
});
export const {addNewList , removeList , changeTitle} = listsSlice.actions
export default listsSlice.reducer;
