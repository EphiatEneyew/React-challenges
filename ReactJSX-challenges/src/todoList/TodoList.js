import React from "react";
import  "./TodoList.module.css"


const TodoList= props => {
    
    return ( 
        <ul>
           { props.items.map(todo => (
                <li key = {todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;