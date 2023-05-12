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
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface ILoginForm {
    email: string;
    password: string;
}