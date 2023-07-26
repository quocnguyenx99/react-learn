# Todo Notes

- TaskApp
  - state [todos, setTodos]
  - fnc: hanldeAddTodo, hanldeChangeTodo, handleDeleteTodo
  - AddTodo({onAdTodo})
    - input
    - button (Add)
  - TaskList ({todos, onChangeTodo, onDeleteTodo})
    - ul
    - todos.map => li
    - Task ({todo, onChange, onDelete})
      - state [isEditing, setIsEditing]
      - input (checkbox)
      - todo.title
      - button (Edit)
      - button (Delete)
