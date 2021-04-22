import React from 'react';
import styles from './TodoItem.module.scss';

const TodoItem = ({ name, done, id }) => {

    const handleCheck = () => {

    }

    return (
        <div className={styles.todoItem}>
            <input type="checkbox" checked={done} onChange={handleCheck} />
            <p>{name}</p>
        </div>
    )
}

export default TodoItem;
