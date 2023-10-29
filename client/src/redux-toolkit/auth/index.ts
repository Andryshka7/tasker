import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User } from 'types'

interface InitialState {
    user: null | User
    isLoggedIn: boolean
}

const initialState: InitialState = {
    user: null,
    isLoggedIn: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<User>) => {
            state.isLoggedIn = true
            state.user = action.payload
        },
        logOut: (state) => {
            state.isLoggedIn = false
            state.user = null
        }
    }
})

export const { signIn, logOut } = authSlice.actions
export default authSlice.reducer
