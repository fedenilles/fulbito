import {configureStore} from '@reduxjs/toolkit'
import contadorReducer from '../reducer/contadorReducer'
import { counterSlice } from '../reducer/contadorSlice'

const store = configureStore ({
    reducer: {
        /* contador: contadorReducer */
        contador: counterSlice.reducer
    }
})

export default store