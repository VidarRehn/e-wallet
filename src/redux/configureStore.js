import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        cards: cardsSlice
    }
})

export default store
