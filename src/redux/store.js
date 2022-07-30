import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '../redux/dataSlice'
import languageSlice from '../redux/languageSlice'
import scaleSlice from './scaleSlice'

export const store = configureStore({
    reducer: {
        language: languageSlice,
        data: dataSlice,
        scale: scaleSlice,
    },
})

