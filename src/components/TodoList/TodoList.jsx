import React from 'react';
import styles from './TodoList.module.scss';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: ${props => props.theme.todosBg}
`

const TodoList = () => {

    const todos = useSelector(state => state.todos);

    return (
        <StyledDiv className={`${styles.todoList} ${styles.container}`}>
            {
                todos.map(todo => (
                    <TodoItem title={todo.title} completed={todo.completed} key={todo.id} id={todo.id} />
                ))
            }
            <div className={styles.todoList__footer}>
                <p>todos left</p>
                <div className={styles.footer__todoStates}>
                    <small>All</small>
                    <small>Active</small>
                    <small>Completed</small>
                </div>
                <button>Clear Completed</button>
            </div>
        </StyledDiv>
    )
}

export default TodoList;
