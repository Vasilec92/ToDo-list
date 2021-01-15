import './App.css';
import React, { useState, useEffect} from 'react'

//importing components
import Form from './components/Form.js';
import TodoList from './components/TodoList.js';

function App() {
  const [inputText, setInputText]=useState("");
  const [todos, setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filtredTodos, setFiltredTodos]=useState([]);

  useEffect(
    ()  => {
      filterHandler();}, 
    [todos, status]
  );
  
  const filterHandler = () => {
    switch(status){
      case "completed":
        setFiltredTodos(todos.filter(todo => todo.completed===true))
        break;

      case "uncompleted":
        setFiltredTodos(todos.filter(todo => todo.completed===false))
        break;

      default:
        setFiltredTodos(todos)
        break;
    }    
  }

  return (
    <div className="App">
      <header>
        <h1>Anna's Todo List </h1>
      </header>
      <Form t
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText} 
      inputText={inputText} 
      setStatus={setStatus}
      />
      <TodoList 
      todos={todos} 
      setTodos={setTodos}
      filtredTodos={filtredTodos}
      />
    </div>
  );
}

export default App;
