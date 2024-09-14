import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import weatherReducer from "./weather/weather.slice";
import forecastReducer from "./forecast/forecast.slice";
import nextdaysReducer from "./nextdays/nextdays.slice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        weather: weatherReducer,
        forecast: forecastReducer,
        nextdays: nextdaysReducer,
    },
})