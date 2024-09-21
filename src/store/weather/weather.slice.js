import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_FORECAST, API_KEY } from "../../const/const";

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.accessToken;

        const response = await fetch(`${API_FORECAST}?key=${API_KEY}&q=Tomsk&days=5`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to get the weather data')
        }

        const data = await response.json();
        console.log('data:  ', data);
        return data;
    }
)

const initialState = {
    data: undefined,
    loading: false,
    error: null,
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default weatherSlice.reducer;