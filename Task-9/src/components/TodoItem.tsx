import type { Todo } from '../types';

type Props = {
  todo: Todo;
  onDelete: (id: number) => void;
};

export default function TodoItem({ todo, onDelete }: Props) {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
      <span>{todo.text}</span>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:underline"
      >
        Delete
      </button>
    </li>
  );
}
