import React from 'react'

//import components
import Todo from './Todo';

const TodoList = ({todos, setTodos}) =>{
   return (
      <div className="todo-container">
         <ul className="todo-list">
            {
            todos.map((todo, idx) => (
            <Todo 
            key={idx} 
            todo = {todo}
            text={todo.text} 
            todos={todos} 
            setTodos={setTodos}/>)
            )}
         </ul>
      </div>
   )
}

export default TodoList;