import React from 'react';
import TodoInput from './components/TodoInput';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App;

