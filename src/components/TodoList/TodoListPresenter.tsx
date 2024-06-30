import { FaTrashCan } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";

export type TodoItem = {
  title: string;
};

interface TodoListPresenterProps {
  todoList: TodoItem[];
  deleteItem: (id: number) => void;
}

export function TodoListPresenter({
  todoList,
  deleteItem,
}: TodoListPresenterProps) {
  return (
    <div className="w-full md:w-1/2 mx-auto">
      <h2 className="font-bold text-xl">Todo一覧</h2>
      {todoList.length >= 1 ? (
        <ul className="list-disc list-inside mt-4">
          {todoList.map((todo, index) => (
            <div
              key={index}
              className="flex gap-2 justify-between items-center mb-4"
            >
              <li className="truncate">{todo.title}</li>
              <button
                onClick={() => deleteItem(index)}
                className="border border-red-500 rounded-md bg-red-500 text-white px-4 py-1"
              >
                <FaTrashCan />
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="flex gap-2 items-center mt-4">
          <IoIosWarning className="text-yellow-500 text-2xl" />
          登録されているTodoがありません
        </div>
      )}
    </div>
  );
}
