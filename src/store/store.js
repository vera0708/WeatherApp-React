import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import weatherReducer from "./weather/weather.slice";
import forecastReducer from "./forecast/forecast.slice";
import favoriteReducer from "./favorite/favorite.slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        weather: weatherReducer,
        forecast: forecastReducer,
        favorite: favoriteReducer,
    },
})