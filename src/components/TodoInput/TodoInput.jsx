import React, { useState } from 'react';
import styles from './TodoInput.module.scss';

const TodoInput = () => {
    const [ todo, setTodo ] = useState('');

    const addTodo = () => {

    }

    return (
        <div className="todoInput">
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default TodoInput;
