import { useReducer, useState, useCallback } from "react";
import { todoReducer, initialState } from "../reducer/todoReducer";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch({ type: "ADD", payload: input });
      setInput("");
    }
  };

  const handleToggle = useCallback((id) => dispatch({ type: "TOGGLE", payload: id }), []);
  const handleDelete = useCallback((id) => dispatch({ type: "DELETE", payload: id }), []);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Todo List with useReducer</h2>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border rounded"
          placeholder="Add a task..."
        />
        <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
      </div>
      <ul className="space-y-2">
        {state.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} onDelete={handleDelete} />
        ))}
      </ul>
      <button
        onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
        className="mt-4 text-sm text-gray-600 underline"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoApp;
