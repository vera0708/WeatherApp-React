import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, API_URL } from "../../const/const";

// не нужно, можете удалить все что связано с auth middleware
export const fetchAccessToken = createAsyncThunk(
    'auth/fetchAccessToken',
    async () => {
        const response = await fetch(`${API_URL}?key=${API_KEY}&q=Tomsk`);

        if (!response.ok) {
            throw new Error('Failed to get an access token')
        }

        const data = await response.json();
        console.log('data:  ', data);
        return data.accessKey;
    }
)

const initialState = {
        accessToken: localStorage.getItem('accessToken') || null,
        loading: false,
        error: null,
}
    
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        removeToken(state) {
            state.accessToken = null;
            localStorage.removeItem('accessToken')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAccessToken.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAccessToken.fulfilled, (state, action) => {
                state.accessToken = action.payload;
                localStorage.setItem('accessToken', action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchAccessToken.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { removeToken } = authSlice.actions;
export default authSlice.reducer