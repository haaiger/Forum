import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState, ILoginForm, IUser, RootState } from "../../types/types";
import { registrationThunk } from "../thunk/authThunk";

const initialState: IUserState = {
    user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    },
    isAuthUser: false,
    isRegUser: false,
    isLoading: false,
    isErrorRegistration: false,
    isErrorLogin: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<ILoginForm>) => {            
            const { email, password } = action.payload;
            state.user.email = email;
            state.user.password = password;
            state.isAuthUser = true;
        },
        registration: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
            state.isAuthUser = true;
        },
        logout: (state) => {
            state.user = initialState.user;
            state.isAuthUser = false;
        },
        errorRegistration: (state, action) => {
            state.isErrorRegistration = action.payload;
        },
        errorLogin: (state, action) => {
            state.isErrorLogin = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registrationThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registrationThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthUser = true;
            })
    }
})

export const selectUser = (state: RootState) => state.user;
export const { login, logout, registration, errorRegistration, errorLogin } = userSlice.actions;
export default userSlice.reducer;