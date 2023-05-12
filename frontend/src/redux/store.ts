import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlices';
import postReducer from './slices/postSlices';

const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer,
    }
});

export default store;
