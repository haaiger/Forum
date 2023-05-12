import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginForm, IUser } from "../../types/types";

export const registrationThunk = createAsyncThunk(
    "user/registration",
    async (user: IUser) => {
        try {
            const response = await fetch("http://localhost:6622/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("400");
        }
    }
);

export const loginThunk = createAsyncThunk(
    'user/login',
    async (user: ILoginForm) => {
        try {
            const response = await fetch("http://localhost:6622/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("400");
        }
    }
);
