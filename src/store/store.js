import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { createStore } from 'redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import authReducer from "./auth/auth.slice";
import weatherReducer from "./weather/weather.slice";
import favoriteReducer from "./favorite/favorite.slice";
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    auth: authReducer,
    weather: weatherReducer,
    favorite: favoriteReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;