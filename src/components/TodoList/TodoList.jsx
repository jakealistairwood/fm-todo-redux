import React, { useState } from 'react';
import styles from './TodoList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../TodoItem';
import styled from 'styled-components';
import { deleteCompletedTodos } from '../../features/todoSlice';

const StyledDiv = styled.div`
    background-color: ${props => props.theme.todosBg}
`

const StyledButton = styled.button`
    color: #9495A5;
    font-size: 0.8rem;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;    

    &:hover {
        color: ${props => props.theme.textColor}
    }
`

const TodoList = () => {

    const [ active, setActive ] = useState('all');

    const dispatch = useDispatch();

    const handleCompletedTodos = () => {
        dispatch(
            deleteCompletedTodos()
        )
    }

    const todos = useSelector(state => state.todos);

    const completedTodos = useSelector(
        state => state.todos.filter(todo => todo.completed === true)
    )

    const todosRemaining = todos.length - completedTodos.length;

    // Improves usability to let user know which tab/list is currently active
    const applyAllTodosClass = active === 'all' ? styles.active : '';
    const applyActiveTodosClass = active === 'active' ? styles.active : '';
    const applyCompletedTodosClass = active === 'completed' ? styles.active : '';

    return (
        <StyledDiv className={`${styles.todoList} ${styles.container}`}>
            {/* Filter List functionality */}
            {todos.length > 0 && active === 'all' ? 
                todos.map(todo => {
                    return (
                        <TodoItem title={todo.title} completed={todo.completed} key={todo.id} id={todo.id} />
                    )
                })
                : null
            }
            {todos.length > 0 && active === 'active' ? 
                todos.map(todo => {
                    return (
                        todo.completed === false && (
                            <TodoItem title={todo.title} completed={todo.completed} key={todo.id} id={todo.id} />
                        )
                    )
                })
                : null
            }
            {todos.length > 0 && active === 'completed' ? 
                todos.map(todo => {
                    return (
                        todo.completed === true && (
                            <TodoItem title={todo.title} completed={todo.completed} key={todo.id} id={todo.id} />
                        )
                    )
                })
                : null
            }
            <div className={styles.todoList__footer}>
                <p>{todosRemaining} todos left</p>
                <div className={styles.footer__todoStates}>
                    <StyledButton className={`${styles.filters} ${applyAllTodosClass}`} onClick={() => setActive('all')}>All</StyledButton>
                    <StyledButton className={`${styles.filters} ${applyActiveTodosClass}`} onClick={() => setActive('active')}>Active</StyledButton>
                    <StyledButton className={`${styles.filters} ${applyCompletedTodosClass}`} onClick={() => setActive('completed')}>Completed</StyledButton>
                </div>
                <StyledButton className={styles.clearTodosBtn} onClick={handleCompletedTodos}>Clear Completed</StyledButton>
            </div>
        </StyledDiv>
    )
}

export default TodoList;
