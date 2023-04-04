
import { Context } from "./context";
import TodoPage from "./TodoPage";
import { addTodo } from "./context";
function App() {

  const todo = new addTodo()
  return (
    <Context.Provider value={todo}>
        <TodoPage/>
    </Context.Provider>
  );
}

export default App;
