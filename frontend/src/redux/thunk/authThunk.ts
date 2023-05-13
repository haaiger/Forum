import { createAsyncThunk } from "@reduxjs/toolkit";
import { registration, errorRegistration, login, errorLogin } from "../slices/userSlices";
import { IUser, ILoginForm } from "../../types/types";

export const registrationThunk = createAsyncThunk(
    "user/registration",
    async (user: IUser, { dispatch }) => {
        try {
            const response = await fetch("http://localhost:6622/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            if (response.ok) {
                dispatch(registration(data));
            } else {
                dispatch(errorRegistration(true));
            }
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("400");
        }
    }
);

export const loginThunk = createAsyncThunk(
    "user/login",
    async (user: ILoginForm, { dispatch }) => {
        try {
            const response = await fetch("http://localhost:6622/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            if (response.ok) {
                dispatch(login(data));
            } else {
                dispatch(errorLogin(true));
            }
            return data;
        } catch (error) {
            console.log(error);
            dispatch(errorLogin(true));
        }
    }
);
