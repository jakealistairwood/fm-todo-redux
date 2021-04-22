import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

// The store is used to keep track of the state 

export const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});
