import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: []
    },
    status: '',
    reducers: {
        addCard: (state, action) => {
            state.cards.push(action.payload)
        },
        changeActive: (state, action) => {
            state.cards.forEach(card => card.active = false)
        },
        sortCards: (state, action) => {
            state.cards.sort((a,b) => b.active - a.active)
        }
    }
})

export const { addCard, changeActive, sortCards } = cardsSlice.actions
export default cardsSlice.reducer