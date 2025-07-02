import React from "react";

const TodoItem = React.memo(({ todo, onToggle, onDelete }) => {
  console.log("Rendering: ", todo.text);
  return (
    <li className="flex justify-between items-center p-3 bg-white shadow rounded">
      <span
        className={`cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} className="text-red-500">❌</button>
    </li>
  );
});

export default TodoItem;
