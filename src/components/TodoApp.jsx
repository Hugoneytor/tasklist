import { useState } from "react"
import { TodoItem } from "./TodoItem";

export const TodoApp = () =>{

  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const onHandleInputChange = (e) => {
    setTitle(e.target.value)
  }
  const onHandleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
    setTitle("")
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={onHandleSubmit}>
        <input type="text" className="todoInput" onChange={onHandleInputChange} value={title}/>
        <input type="submit" value="Create Todo" className="buttonCreate"/>
      </form>

      <div className="todosContainer">
        {
          todos.map((todo)=>{
            return <TodoItem key={todo.id} {...todo}/>
          })
        }
      </div>

    </div>
  )
}