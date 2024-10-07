import styles from './FormInput.module.css'
import MyInput from "../ui/input/MyInput.jsx";
import MyButton from "../ui/button/MyButton.jsx";
import {useState} from "react";
import todoStore from "../../store/todoStore.js";

const FormInput = () => {
  const initialState = {id: Date.now(), title: '', description: ''}

  const [todo, setTodo] = useState(initialState);
  const {form, submit} = styles;
  const addTodo = (e) => {
    e.preventDefault();
    todoStore.addTodo(todo)
    setTodo(initialState);
  }


  return (
    <form className={form} onSubmit={addTodo}>
      <MyInput value={todo.title}
               onChange={e => setTodo({...todo, title: e.target.value})}
               placeholder="Название задачи..."
               type="text"/>
      <MyInput value={todo.description}
               placeholder="Описание задачи..."
               onChange={e => setTodo({...todo, description: e.target.value})}
               type="text"/>
      <MyButton className={submit} type="submit">Добавить</MyButton>
    </form>
  )
}

export default FormInput;