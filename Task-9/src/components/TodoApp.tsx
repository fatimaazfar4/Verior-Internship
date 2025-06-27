import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import TodoStats from './TodoStats';
import { useTodos } from '../hooks/useTodos';

export default function TodoApp() {
  const { todos, addTodo, deleteTodo } = useTodos();

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Todo List</h1>
      <AddTodo onAdd={addTodo} />
      <TodoStats todos={todos} />
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}
