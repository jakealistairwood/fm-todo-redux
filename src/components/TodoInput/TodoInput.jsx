import React, { useState } from 'react';
import styles from './TodoInput.module.scss';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../../features/todoSlice';
import styled from 'styled-components';

const StyledDiv = styled.div`
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

    const addTodo = () => {
        if(todo.length > 0) {
            dispatch(saveTodo({
                item: todo,
                done: false,
                id: Date.now()
            }))
            setTodo('');
        } else {
            return;
        }
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            addTodo();
        }
    }

    return (
        <StyledDiv className={`${styles.todoInput} ${styles.container}`}>
            <StyledButton onClick={addTodo}>+</StyledButton>
            <StyledInput 
                type="text" 
                value={todo} 
                onChange={e => setTodo(e.target.value)} 
                onKeyDown={handleKeyPress}
                placeholder="Create a new todo..." />
        </StyledDiv>
    )
}

export default TodoInput;
