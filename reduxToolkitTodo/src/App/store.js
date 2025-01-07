import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/Todo/todoSlice'; // Import the default export from your slice

export const store = configureStore({
    reducer: {
        todo: todoReducer // Use todoReducer here instead of todoSlice
    }
});
