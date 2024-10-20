import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import weatherReducer from "./weather/weather.slice";
import favoriteReducer from "./favorite/favorite.slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        weather: weatherReducer,
        favorite: favoriteReducer,
    },
})
