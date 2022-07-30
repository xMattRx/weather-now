import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const scaleSlice = createSlice({
    name: 'scale',
    initialState,
    reducers: {
        changeScale: (state, action) => {
            state.value = !state.value
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeScale } = scaleSlice.actions

export default scaleSlice.reducer