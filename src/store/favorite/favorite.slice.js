import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoriteList: localStorage.getItem('favorite')
        ? JSON.parse(localStorage.getItem('favorite'))
        : [],
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            state.favoriteList.push(action.payload);
            localStorage.setItem('favorite', JSON.stringify(state.favoriteList))
        },
        removeFromFavorite: (state, action) => {
            state.favoriteList = state.favoriteList.filter(
                (city) => city !== action.payload);
            localStorage.setItem('favorite', JSON.stringify(state.favoriteList));
        },
    },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;