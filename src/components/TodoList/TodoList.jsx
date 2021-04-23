import React from 'react';
import styles from './TodoList.module.scss';
import { useDispatch, useSelector } from 'react-redux'; // <-- useSelector grabs the state from Redux whereas useDispatch pushes the data
import { selectTodoList, clearTodos } from '../../features/todoSlice';
import TodoItem from '../TodoItem';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: ${props => props.theme.todosBg}
`

const TodoList = () => {

    const todos = useSelector(selectTodoList);

    const dispatch = useDispatch();

    const resetTodos = () => {
        dispatch(clearTodos());
    }

    const todosLeft = todos.length + " items left";

    return (
        <StyledDiv className={`${styles.todoList} ${styles.container}`}>
            {
                todos.map(todo => (
                    <TodoItem name={todo.item} done={todo.done} key={todo.id} id={todo.id} />
                ))
            }
            <div className={styles.todoList__footer}>
                <p>{todosLeft}</p>
                <div className={styles.footer__todoStates}>
                    <small>All</small>
                    <small>Active</small>
                    <small>Completed</small>
                </div>
                <button onClick={resetTodos}>Clear Completed</button>
            </div>
        </StyledDiv>
    )
}

export default TodoList;
