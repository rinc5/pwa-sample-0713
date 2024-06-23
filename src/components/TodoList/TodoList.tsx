import { LOCAL_STORAGE_NAME } from "../../CONST";
import { useState } from "react";
import { TodoItem, TodoListPresenter } from "./TodoListPresenter";

export const TodoList = () => {
  const todos = localStorage.getItem(LOCAL_STORAGE_NAME);
  const parsedTodos = todos != null ? JSON.parse(todos) : [];
  const [todoList, setTodoList] = useState<TodoItem[]>(parsedTodos);

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
};
