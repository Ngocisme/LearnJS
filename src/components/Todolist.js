import { todo } from "node:test";
import React from "react";
import TodoItem from "./TodoIem";


const Todolist = ({todos, toggleSuccess, removeTodo}) => {
    return (
        <ul>
            {todos.map(
                (todo) => {
                    <
                    TodoItem
                     key={todo.id}
                     todo = {todo}
                     toggleSuccess={toggleSuccess}
                     removeTodo={removeTodo}
                    />
                }
            )}
        </ul>
    );
}

export default Todolist;