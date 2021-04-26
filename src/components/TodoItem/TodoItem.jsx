import React from 'react';
import styles from './TodoItem.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCompletedTodo } from '../../features/todoSlice';
import styled from 'styled-components';

const StyledDiv = styled.div`
    border-bottom: 1px solid ${props => props.theme.borderColor};
`

const StyledTodoName = styled.p`
    color: ${props => props.theme.textColor}
`

const TodoItem = ({ title, completed, id }) => {

    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(
            toggleCompletedTodo({
                id,
                completed: !completed,
            })
        )
    };

    const inputChecked = completed ? styles.checked : "";

    return (
        <StyledDiv className={styles.todoItem}>
            <div>
                <input 
                    className={styles.todoItem__input} 
                    type="checkbox" 
                    checked={completed}
                    onChange={handleCheck}
                />
                <StyledTodoName className={`${styles.todo__name} ${inputChecked}`}>{title}</StyledTodoName>
            </div>
            <button onClick="delete">X</button>
        </StyledDiv>
    )
}

export default TodoItem;
