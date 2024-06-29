import { LOCAL_STORAGE_NAME } from "../../CONST";
import { Dispatch, SetStateAction } from "react";
import { TodoItem, TodoListPresenter } from "./TodoListPresenter";

interface TodoListProps {
  todoList: TodoItem[];
  setTodoList: Dispatch<SetStateAction<TodoItem[]>>;
}

export function TodoList({ todoList, setTodoList }: TodoListProps) {
  /**
   * Todo削除
   */
  const deleteItem = (id: number): void => {
    const deletedTodoList: TodoItem[] = todoList.filter(
      (_, index) => index !== id
    );
    const stringify: string = JSON.stringify(deletedTodoList);
    localStorage.setItem(LOCAL_STORAGE_NAME, stringify);

    setTodoList(deletedTodoList);
  };

  return <TodoListPresenter todoList={todoList} deleteItem={deleteItem} />;
}
