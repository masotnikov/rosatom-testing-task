import styles from "./TodoList.module.css"
import todoStore from '../../store/todoStore.js'
import TodoItem from "../TodoItem/TodoItem.jsx";
import {observer} from "mobx-react-lite";

const TodoList = observer(() => {
  return (
    <ul className={styles.list}>
      {todoStore.todoList.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
});
export default TodoList;