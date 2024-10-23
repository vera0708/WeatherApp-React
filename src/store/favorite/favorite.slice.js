import { createSlice } from "@reduxjs/toolkit";

const favoriteList =
    localStorage.getItem('favorite') !== null
        ? JSON.parse(localStorage.getItem('favorite'))
        : [];
    
const setFavorite = (favoriteList) => {
    localStorage.setItem('favorite', JSON.stringify(favoriteList))
}

const initialState = {
    favoriteList: favoriteList,
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            state.favoriteList.push(action.payload);
            // очень важно! в reducers не должно быть side effects
            // рекомендую вам использовать данный пакет: https://www.npmjs.com/package/redux-persist
            // если не будет получаться, попробуйте написать логику сохранения состояния в store.js используя store.subscribe
            setFavorite(state.favoriteList);
        },
        removeFromFavorite: (state, action) => {
            state.favoriteList = state.favoriteList.filter(
                (city) => city !== action.payload);
            setFavorite(state.favoriteList);
        },
    },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;