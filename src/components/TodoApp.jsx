import { useState } from "react"

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
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={onHandleSubmit}>
        <input type="text" className="todoInput" onChange={onHandleInputChange}/>
        <input type="submit" value="Create Todo" className="buttonCreate"/>
      </form>

    </div>
  )
}