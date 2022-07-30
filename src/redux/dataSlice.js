import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: undefined,
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        getData: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { getData } = dataSlice.actions

export default dataSlice.reducer