import React, {useRef} from "react";
import './NewTodo.module.css';

const NewTodo= props => {
    const textInputRef = useRef(null);

    const todoSubmitHandler = (event) => {
        event.preventDefault();
        const enteredText = textInputRef.current.value;
        props.onAddTodo(enteredText);
         

    }
   return (
    <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
        <button type="submit">Add Todo</button>
    </form>
   );
}

export default NewTodo