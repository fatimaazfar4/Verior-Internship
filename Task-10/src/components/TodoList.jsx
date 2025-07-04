import React, { useReducer, useCallback, useState } from "react";
import TodoItem from "./TodoItem";

const initialTodos = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoList() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [text, setText] = useState("");

  const addTodo = useCallback(() => {
    if (text.trim() === "") return;
    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        text,
        completed: false,
      },
    });
    setText("");
  }, [text]);

  const toggleTodo = useCallback((id) => {
    dispatch({ type: "TOGGLE", payload: id });
  }, []);

  const deleteTodo = useCallback((id) => {
    dispatch({ type: "DELETE", payload: id });
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}
