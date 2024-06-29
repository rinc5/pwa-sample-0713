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
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <div key={index}>
            <li>{todo.title}</li>
            <button onClick={() => deleteItem(index)}>削除</button>
          </div>
        ))}
      </ul>
    </div>
  );
}
