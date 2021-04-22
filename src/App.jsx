import React from 'react';
import TodoInput from './components/TodoInput';
import './App.scss';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <h1>App is working</h1>
      <TodoInput />
    </div>
  )
}

export default App;

