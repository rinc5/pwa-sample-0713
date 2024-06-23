export type TodoItem = {
  todo: string;
};

interface TodoListPresenterProps {
  todoList: TodoItem[];
}

export const TodoListPresenter = ({ todoList }: TodoListPresenterProps) => {
  return (
    <div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
};
