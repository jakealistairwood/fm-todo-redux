import React from 'react';
import styles from './TodoItem.module.scss';
import { useDispatch } from 'react-redux';
import { setCheck, clearTodos } from '../../features/todoSlice';

const TodoItem = ({ name, done, id }) => {

    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(setCheck(id));
    }

    const inputChecked = done ? styles.checked : "";

    return (
        <div className={styles.todoItem}>
            <input className={styles.todoItem__input} type="checkbox" checked={done} onChange={handleCheck} />
            <p className={`${styles.todo__name} ${inputChecked}`}>{name}</p>
        </div>
    )
}

export default TodoItem;
