import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList';
import styled, { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from './themes';

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body}
`

const App = () => {

  const [ theme, setTheme ] = useState('light');
  const [ toggle, setToggle ] = useState(false);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightMode : darkMode } >
      <StyledApp className="app">
        <Navbar toggle={toggle} onToggle={() => setToggle(!toggle)} toggleTheme={toggleTheme} />
        <TodoInput />
        <TodoList />
      </StyledApp>
    </ThemeProvider>
  )
}

export default App;

