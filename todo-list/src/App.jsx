import './App.css'
import TodoList from "./components/TodoList/TodoList.jsx";
import FormInput from "./components/FormInput/FormInput.jsx";

const App = () => {
  return (
    <div className='app'>
      <h1 className='title'>Todo List</h1>
      <FormInput/>
      <TodoList/>
    </div>
  )
}

export default App;