import React from 'react';
import styles from './TodoList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../TodoItem';
import styled from 'styled-components';
import { deleteCompletedTodos } from '../../features/todoSlice';

const StyledDiv = styled.div`
    background-color: ${props => props.theme.todosBg}
`

const TodoList = () => {

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

    return (
        <StyledDiv className={`${styles.todoList} ${styles.container}`}>
            {
                todos.map(todo => (
                    <TodoItem title={todo.title} completed={todo.completed} key={todo.id} id={todo.id} />
                ))
            }
            <div className={styles.todoList__footer}>
                <p>{todosRemaining} todos left</p>
                <div className={styles.footer__todoStates}>
                    <small>All</small>
                    <small>Active</small>
                    <small>Completed</small>
                </div>
                <button onClick={handleCompletedTodos}>Clear Completed</button>
            </div>
        </StyledDiv>
    )
}

export default TodoList;
