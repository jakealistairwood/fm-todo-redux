import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList';
import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode, GlobalStyles } from './themes';

const App = () => {

  const [ theme, setTheme ] = useState('light');
  const [ toggle, setToggle ] = useState(false);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode } >
      <GlobalStyles />
      <main className="app">
        <Navbar toggle={toggle} onToggle={() => setToggle(!toggle)} toggleTheme={toggleTheme} />
        <TodoInput />
        <TodoList />
      </main>
    </ThemeProvider>
  )
}

export default App;

