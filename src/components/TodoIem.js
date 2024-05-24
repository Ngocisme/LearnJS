import React from "react";

const TodoItem = ({ todo, toggleSuccess, removeTodo }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => toggleSuccess(todo.id)}
            />
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </li>
    )
}

export default TodoItem;