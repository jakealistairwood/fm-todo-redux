import { createSlice } from '@reduxjs/toolkit';

// const [ todoList, setTodoList ] = useState([]);

const initialState = {
    todoList: [],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        setCheck: (state, action) => {
            state.todoList.map(item => {
                if (action.payload === item.id) {
                    if (item.done === true) {
                        item.done = false
                    } else {
                        item.done = true
                    }
                }
            })
        },
        clearTodos: (state, action) => {
            state.todoList = [];
        },
        // clearTodos: (state, action) => {
        //     state.todoList.filter(item => {
        //         if(item.done === true) {

        //         }
        //     })
        // }
    }
});

export const { saveTodo, setCheck, clearTodos } = todoSlice.actions;

export const selectTodoList = state => state.todos.todoList;

export default todoSlice.reducer;