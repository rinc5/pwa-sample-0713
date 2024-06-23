import "./App.css";
import { RegisterTodo } from "./components/RegisterTodo/RegisterTodo";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <h1>TRY PWA!</h1>
      <RegisterTodo />
      <TodoList />
    </div>
  );
}

export default App;
