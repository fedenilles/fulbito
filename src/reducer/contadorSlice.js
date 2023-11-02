import {createSlice} from "@reduxjs/toolkit"

// Estado Inicial
const initialState = {
    contador: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        state.contador += 1
      },
      increment5: (state, action) => {
        state.contador += action.payload
      },
      decrement: (state) => {
        state.contador -= 1
      },
      decrement5: (state, action) => {
        state.contador -= action.payload
      },
      resett: (state) => {
        state.contador = 0
      },  
    }
})

export const {increment, increment5, decrement, decrement5, resett} = counterSlice.actions

export default counterSlice