export type TodoItem = {
  todo: string;
};

interface TodoListPresenterProps {
  todoList: TodoItem[];
  deleteItem: (id: number) => void;
}

export const TodoListPresenter = ({
  todoList,
  deleteItem,
}: TodoListPresenterProps) => {
  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <div key={index}>
            <li>{todo.todo}</li>
            <button onClick={() => deleteItem(index)}>削除</button>
          </div>
        ))}
      </ul>
    </div>
  );
};
