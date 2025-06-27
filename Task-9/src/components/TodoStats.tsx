import type { Todo } from '../types';

type Props = {
  todos: Todo[];
};

export default function TodoStats({ todos }: Props) {
  return (
    <div className="text-sm text-gray-600 mb-4">
      Total Todos: {todos.length}
    </div>
  );
}
