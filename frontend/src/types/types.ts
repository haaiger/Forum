import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store from "../redux/store";

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IUserState {
    user: IUser;
    isAuthUser: boolean;
    isLoading: boolean;
}

export interface ILoginForm {
    email: string;
    password: string;
}

export interface IRegistrationResponse {

}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
