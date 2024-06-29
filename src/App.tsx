import { useState } from "react";
import "./App.css";
import { RegisterTodo } from "./components/RegisterTodo/RegisterTodo";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoList/TodoListPresenter";
import { LOCAL_STORAGE_NAME } from "./CONST";

function App() {
  const todos = localStorage.getItem(LOCAL_STORAGE_NAME);
  const parsedTodos = todos != null ? JSON.parse(todos) : [];
  const [todoList, setTodoList] = useState<TodoItem[]>(parsedTodos);

  return (
    <div className="App">
      <h1>PWA TODO</h1>
      {/** Todo登録フォーム */}
      <RegisterTodo setTodoList={setTodoList} />
      {/** Todo一覧 */}
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
