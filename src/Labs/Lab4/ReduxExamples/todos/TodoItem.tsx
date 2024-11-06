import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem( { todo }: {
  todo: { id: string; title: string }; 
}) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      {todo.title + " "}
      <button onClick={() => dispatch(setTodo(todo))}
        id="wd-set-todo-click"
        className="btn btn-primary pill mb-3 me-2">Edit</button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
        className="btn btn-danger pill mb-3 me-2">Delete</button>
    </li>
  );
}