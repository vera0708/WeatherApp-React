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
            // очень важно! в reducers не должно быть side effects
            // reducers - это чистые функции (погуглите что это) и в них должны происходить какие-либо изменения только redux-состояния
            // рекомендую вам использовать данный пакет: https://www.npmjs.com/package/redux-persist
            // если не будет получаться, попробуйте написать логику сохранения состояния в store.js используя store.subscribe
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