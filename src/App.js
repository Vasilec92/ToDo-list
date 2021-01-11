import './App.css';
import React, { useState } from 'react'

//importing components
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {
  const [inputText, setInputText]=useState("");
  const [todos, setTodos]=useState([]);

  return (
    <div className="App">
      <header>
        <h1>Anna's Todo List </h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
