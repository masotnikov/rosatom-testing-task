import {makeAutoObservable} from "mobx";

class TodoStore {

  todoList = [
    {id: 1, title: 'Велосипед', description: 'Покрутить педали на тренажёре'},
    {id: 2, title: 'Починить машину', description: 'Проверить масло и уровень охлаждающей жидкости'},
    {id: 3, title: 'Собрать мебель', description: 'Собрать шкаф и стол из IKEA'},
    {id: 4, title: 'Сделать барбекю', description: 'Приготовить мясо на гриле для друзей'},
    {id: 5, title: 'Провести ревизию инструмента', description: 'Проверить все инструменты и упорядочить их'},
  ];

  constructor() {
    makeAutoObservable(this)
  }

  removeTodoById(id) {
    this.todoList = this.todoList.filter(todo => todo.id !== id)
  }

  selectedTodo(id, isChecked) {
    const todoIndex = this.todoList.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      const todo = this.todoList[todoIndex];
      this.todoList.splice(todoIndex, 1);
      if (isChecked) {
        this.todoList.push(todo);
      } else {
        this.todoList.unshift(todo);
      }
    }
  }

  addTodo(todo) {
    this.todoList = [todo, ...this.todoList]
  }
}

export default new TodoStore();