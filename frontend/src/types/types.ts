import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { Action, ThunkAction } from "@reduxjs/toolkit";

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IUserState {
    user: IUser;
    isAuthUser: boolean;
    isRegUser: boolean;
    isLoading: boolean;
    isErrorRegistration: boolean,
    isErrorLogin: boolean,
}

export interface ILoginForm {
    email: string;
    password: string;
}

export interface IRegistrationResponse {

}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
