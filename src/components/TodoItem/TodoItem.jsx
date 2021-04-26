import React from 'react';
import styles from './TodoItem.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCompletedTodo, deleteTodo } from '../../features/todoSlice';
import styled from 'styled-components';

const StyledDiv = styled.div`
    border-bottom: 1px solid ${props => props.theme.borderColor};
`

const StyledTodoName = styled.p`
    color: ${props => props.theme.textColor}
`

const StyledSVG = styled.svg`
    path {
        fill: ${props => props.theme.svgFill}
    }
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
    
    const handleDelete = () => {
        dispatch(
            deleteTodo({
                id: id
            })
        );
    }

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
            <button onClick={handleDelete}>
                <StyledSVG 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18">
                    <path 
                        // fill="#494C6B" 
                        fill-rule="evenodd" 
                        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                        />
                    </StyledSVG>
            </button>
        </StyledDiv>
    )
}

export default TodoItem;
