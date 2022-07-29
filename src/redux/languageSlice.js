import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        language: "Português",
        title: "Como está o tempo hoje?",
        placeholder: "Digite o nome da cidade",
        select: "Idioma selecionado:",
        api: "pt_br"
    },
    data: null,
}

export const LanguageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeLanguage } = LanguageSlice.actions

export default LanguageSlice.reducer