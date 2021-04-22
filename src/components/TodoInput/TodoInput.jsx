import React, { useState } from 'react';
import styles from './TodoInput.module.scss';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../../features/todoSlice';

const TodoInput = () => {
    const [ todo, setTodo ] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {
        console.log(`Adding ${todo}`);
        dispatch(saveTodo({
            item: todo,
            done: false,
            id: Date.now()
        }))
    }

    return (
        <div className={`${styles.todoInput} ${styles.container}`}>
            <button onClick={addTodo}>+</button>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
        </div>
    )
}

export default TodoInput;
