import React from 'react';
import styles from './TodoList.module.scss';
import { useSelector } from 'react-redux'; // <-- useSelector grabs the state from Redux whereas useDispatch pushes the data
import { selectTodoList } from '../../features/todoSlice';
import TodoItem from '../TodoItem';

const TodoList = () => {

    const todos = useSelector(selectTodoList);

    const todosLeft = todos.length + " items left";

    return (
        <div className={`${styles.todoList} ${styles.container}`}>
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
                <p>Clear Completed</p>
            </div>
        </div>
    )
}

export default TodoList;
