import { createSlice } from "@reduxjs/toolkit";
import {state } from "../../categoriesJson";

const initialState =  state;
   

const newProducts = createSlice({
   name:'categoriesProducts',
   initialState
})


export default newProducts.reducer;