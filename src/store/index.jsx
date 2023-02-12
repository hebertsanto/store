import {configureStore} from '@reduxjs/toolkit'
import productSlice from './reducer/itens'
import newProducts from './reducer/category'

const store = configureStore({
    reducer:{
        products:productSlice,
        newProducts:newProducts
    }
})

export default store;