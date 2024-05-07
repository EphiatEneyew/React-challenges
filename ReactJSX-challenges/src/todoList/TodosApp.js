import React, {useState} from 'react';
import TodoList from './TodoList';
import NewTodo from './NewTodo';

function TodosApp() {
    const [todos, setTodos] = useState([])

  const todoAddHandler = (text) => {
     setTodos(prevTodos =>[...prevTodos, {id: Math.random().toString(), text}])
  };

  const todoDeleteHandler = (id) => {
    setTodos(prevTodos => prevTodos.filter(prevTodo => prevTodo.id !== id));
  }
  return (
    <div className="App">
       <NewTodo onAddTodo={todoAddHandler}/>
       <TodoList items = {todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
}

export default TodosApp;
