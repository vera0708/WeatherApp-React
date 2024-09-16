import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_KEY, API_FORECAST } from "../../const/const";

export const fetchNextdays = createAsyncThunk(
    'nextdays/fetchNextdays',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.accessToken;

        const response = await fetch(`${API_FORECAST}?key=${API_KEY}&q=Tomsk&days=4`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to get the nextdays data')
        }

        const data = await response.json();
        console.log('nextdays-4:  ', data);
        return data;
    }
)

const initialState = {
    data: undefined,
    loading: false,
    error: null,
};

const nextdaysSlice = createSlice({
    name: 'nextdays',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNextdays.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNextdays.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchNextdays.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default nextdaysSlice.reducer;