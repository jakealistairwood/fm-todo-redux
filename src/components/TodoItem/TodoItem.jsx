import React from 'react';
import styles from './TodoItem.module.scss';
import { useDispatch } from 'react-redux';
import { setCheck, clearTodos } from '../../features/todoSlice';
import styled from 'styled-components';

const StyledDiv = styled.div`
    border-bottom: 1px solid ${props => props.theme.borderColor};
`

const StyledTodoName = styled.p`
    color: ${props => props.theme.textColor}
`

const TodoItem = ({ name, done, id }) => {

    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(setCheck(id));
    }

    const inputChecked = done ? styles.checked : "";

    return (
        <StyledDiv className={styles.todoItem}>
            <input className={styles.todoItem__input} type="checkbox" checked={done} onChange={handleCheck} />
            <StyledTodoName className={`${styles.todo__name} ${inputChecked}`}>{name}</StyledTodoName>
        </StyledDiv>
    )
}

export default TodoItem;
