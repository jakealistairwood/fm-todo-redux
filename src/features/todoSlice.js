// import { createSlice } from '@reduxjs/toolkit';

// // const [ todoList, setTodoList ] = useState([]);

// const initialState = {
//     todoList: [],
// }

// const todoSlice = createSlice({
//     name: 'todos',
//     initialState,
//     reducers: {
//         saveTodo: (state, action) => {
//             state.todoList.push(action.payload)
//         },
//         setCheck: (state, action) => {
//             state.todoList.map(item => {
//                 if (action.payload === item.id) {
//                     if (item.done === true) {
//                         item.done = false
//                     } else {
//                         item.done = true
//                     }
//                 }
//             })
//         },
//         clearTodos: (state, action) => {
//             state.todoList = [];
//         },
//         // clearTodos: (state, action) => {
//         //     state.todoList.filter(item => {
//         //         if(item.done === true) {

//         //         }
//         //     })
//         // }
//     }
// });

// export const { saveTodo, setCheck, clearTodos } = todoSlice.actions;

// export const selectTodoList = state => state.todos.todoList;

// export default todoSlice.reducer;

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
        }
    }
})

export const { 
    createTodo,
    toggleCompletedTodo,
    deleteTodo,
    deleteCompletedTodos
} = todoSlice.actions;

export default todoSlice.reducer;