import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import dataSlice from '../redux/dataSlice';
import languageSlice from '../redux/languageSlice';
import scaleSlice from './scaleSlice';


export const store = configureStore({
    reducer: {
        language: languageSlice,
        data: dataSlice,
        scale: scaleSlice,
    },
    middleware: [thunk],

})
