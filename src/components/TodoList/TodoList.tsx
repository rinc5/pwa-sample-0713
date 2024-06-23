import { LOCAL_STORAGE_NAME } from "../../CONST";
import { useState } from "react";
import { TodoItem, TodoListPresenter } from "./TodoListPresenter";

export const TodoList = () => {
  const todos = localStorage.getItem(LOCAL_STORAGE_NAME);
  const parsedTodos = todos != null ? JSON.parse(todos) : [];
  const [todoList, setTodoList] = useState<TodoItem[]>(parsedTodos);

  return <TodoListPresenter todoList={todoList} />;
};
