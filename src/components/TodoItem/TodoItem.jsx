import React from 'react';
import styles from './TodoItem.module.scss';
import { useDispatch } from 'react-redux';
import { setCheck } from '../../features/todoSlice';

const TodoItem = ({ name, done, id }) => {

    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(setCheck(id));
    }

    return (
        <div className={styles.todoItem}>
            <input type="checkbox" checked={done} onChange={handleCheck} />
            <p>{name}</p>
        </div>
    )
}

export default TodoItem;
