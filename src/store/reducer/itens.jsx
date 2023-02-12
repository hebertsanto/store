import {createSlice} from '@reduxjs/toolkit'
import { stateItensPage } from '../../categoriesJson/itens';

const initialState = stateItensPage;
    

const productSlice = createSlice({
    name:'itensProduct',
    initialState
})


export default productSlice.reducer;