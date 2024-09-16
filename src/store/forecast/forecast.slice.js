import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, API_FORECAST } from "../../const/const";

export const fetchForecast = createAsyncThunk(
    'forecast/fetchForecast',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.accessToken;

        const response = await fetch(`${API_FORECAST}?key=${API_KEY}&q=Tomsk&days=14`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to get the forecast data')
        }

        const data = await response.json();
        console.log('forecast_14:  ', data);
        return data;
    }
)

const initialState = {
    data: undefined,
    loading: false,
    error: null,
};

const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchForecast.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchForecast.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchForecast.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default forecastSlice.reducer;