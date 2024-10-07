import MyButton from "../ui/button/MyButton.jsx";
import styles from "./TodoItem.module.css"
import todoStore from "../../store/todoStore.js";
import {useState} from "react";

const TodoItem = ({todo}) => {
  const {item, checkbox, textWrapper, title, text, removeIcon, close, checked} = styles;
  const [isChecked, setIsChecked] = useState(false)

  const checkedTodo = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    todoStore.selectedTodo(todo.id, checked);

  };

  return (
    <li className={`${item} ${isChecked ? checked : ''}`}>
      <input onChange={checkedTodo} className={checkbox} type='checkbox'/>
      <div className={textWrapper}>
        <h2 className={title}>{todo.title}</h2>
        <p className={text}>{todo.description}</p>
      </div>
      <MyButton onClick={() => todoStore.removeTodoById(todo.id)} type="button" className={close}>
        <img className={removeIcon}
             src="../../../public/cross.png"
             alt="удалить тудушку"
             width='25'
             height='25'/>
      </MyButton>
    </li>
  )
}

export default TodoItem;