import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        createTodo: (state, action) => {
            const newTodo = {
                title: action.payload.title,
                completed: false,
                id: Date.now(),
            };
            state.push(newTodo);
        },
        toggleCompletedTodo: (state, action) => {
            const index = state.findIndex(
                todo => todo.id === action.payload.id
            );
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id);
        },
        deleteCompletedTodos: (state) => {
            return state.filter(todo => todo.completed === false);
        },
    }
})

export const { 
    createTodo,
    toggleCompletedTodo,
    deleteTodo,
    deleteCompletedTodos,
} = todoSlice.actions;

export default todoSlice.reducer;