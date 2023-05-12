import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState, ILoginForm, IUser, RootState } from "../../types/types";

const initialState: IUserState = {
    user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    },
    isAuthUser: true,
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
    },
})

export const selectUser = (state: RootState) => state.user;
export const { login, logout, registration } = userSlice.actions;
export default userSlice.reducer;