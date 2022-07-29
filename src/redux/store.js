import { configureStore } from '@reduxjs/toolkit'
import languageSlice from '../redux/languageSlice'

export const store = configureStore({
    reducer: {
        language: languageSlice
    },
})

