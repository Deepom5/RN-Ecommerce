import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    localId: null,
    user: null,
    token: null,
    profileImage: null,
}


export const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers:{
        setUser: (state, action) => {
            return {
                user: action.payload.email,
                token: action.payload.idToken,
                localId: action.payload.localId
            }
        },
        logOut: () => {
            return {user: null, token: null, localId: null, profileImage: null}
        },
        setProfileImage: (state, action) => {
            return{
                ...state,
                profileImage: action.payload
            }
        }
    }
})


export const { setUser, logOut, setProfileImage} = authSlice.actions;

export default authSlice.reducer;