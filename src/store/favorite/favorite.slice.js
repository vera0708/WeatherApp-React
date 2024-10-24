import { createSlice } from "@reduxjs/toolkit";

const favoriteList =
    localStorage.getItem('favorite') !== null
        ? JSON.parse(localStorage.getItem('favorite'))
        : [];

const initialState = {
    favoriteList: favoriteList,
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            state.favoriteList.push(action.payload);
        },
        removeFromFavorite: (state, action) => {
            state.favoriteList = state.favoriteList.filter(
                (city) => city !== action.payload);
        },
    },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;