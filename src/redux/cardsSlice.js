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
        removeActive: (state, action) => {
            state.cards.forEach(card => card.active = false)
        },
        sortCards: (state, action) => {
            state.cards.sort((a,b) => b.active - a.active)
        },
        makeActive: (state, action) => {
            state.cards.forEach((card) => {
                if (card.cardNumber === action.payload.cardNumber) {
                    card.active = true
                } else {
                    card.active = false
                }
            })
        },
        removeCard: (state, action) => {
            let cardIndex = state.cards.findIndex(card => {
                if (card.cardNumber === action.payload.cardNumber) {
                    return card
                }
            })
            state.cards.splice(cardIndex, 1)
        }
    }
})

export const { addCard, removeActive, sortCards, makeActive, removeCard } = cardsSlice.actions
export default cardsSlice.reducer