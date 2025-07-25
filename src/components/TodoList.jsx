import React from "react";
import TodoItem from "./TodoItem";
import "../App.css";

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p className="text-center text-gray-500">No tasks yet.</p>;
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
