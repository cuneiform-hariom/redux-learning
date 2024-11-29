import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="bg-slate-900 h-screen">
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
