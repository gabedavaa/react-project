import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTode, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleTode={toggleTode}
          />
        );
      })}
    </ul>
  );
}
