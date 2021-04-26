import React, { useState } from 'react';
import styles from './TodoInput.module.scss';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../features/todoSlice';
import styled from 'styled-components';

const StyledForm = styled.form`
    background-color: ${props => props.theme.todosBg}
`

const StyledInput = styled.input`
    color: ${props => props.theme.textColor};

    &::placeholder {
        color: ${props => props.theme.placeholderTextColor};
    }
`

const StyledButton = styled.button`
    border: 1px solid ${props => props.theme.borderColor};
    color: ${props => props.theme.borderColor};
`

const TodoInput = () => {
    const [ todo, setTodo ] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(
            createTodo({
                title: todo
            })
        );
    }

    return (
        <StyledForm 
            className={`${styles.todoInput} ${styles.container}`}
            onSubmit={onSubmit}
        >
            <StyledButton type='submit'>+</StyledButton>
            <StyledInput 
                type="text" 
                value={todo} 
                onChange={e => setTodo(e.target.value)}
                placeholder="Create a new todo..." />
        </StyledForm>
    )
}

export default TodoInput;
