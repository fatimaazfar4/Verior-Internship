import React from "react";
import PostList from "./components/PostList";
import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 text-gray-800 py-10 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center drop-shadow-md">
        🌟 React Custom Hooks & Reducers
      </h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">📰 Post List</h2>
          <PostList />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">✅ Todo App</h2>
          <TodoApp />
        </div>
      </div>
    </div>
  );
};

export default App;