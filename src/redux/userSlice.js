import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

 export const getUser = createAsyncThunk('user/getUser', async () => {
    let response = await fetch('https://randomuser.me/api/')
    let data = await response.json()
    return data
 })

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    status: '',
    reducers: {
        //actions
    },
    extraReducers: {
        [getUser.fulfilled]: (state, action) => {
            state.user = action.payload
            state.status = 'Found data!'
        },
        [getUser.pending]: (state, action) => {
            state.status = 'Loading...'
        },
        [getUser.rejected]: (state, action) => {
            state.status = 'Failed to get data :('
        }
    }
})

export default userSlice.reducer