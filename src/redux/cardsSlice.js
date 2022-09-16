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
        }
    }
})

export const { addCard } = cardsSlice.actions
export default cardsSlice.reducer