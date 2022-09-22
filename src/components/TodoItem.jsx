import { useState } from "react"

export const TodoItem = ({title}) => {

  const [isEdit, setIsEdit] = useState(false)

  const FormEdit = () => {
    const [newValue, setNewValue] = useState("")
    const onHandleSubmit = (e) => {
      e.preventDefault()
    }
    const handleChange = (e) =>{
      setNewValue(e.target.value)
    }

    return (
      <form onSubmit={onHandleSubmit}>
        <input type="text" onChange={handleChange} value={newValue}/>
        <button>Update</button>
      </form>
    )
  }

  const TodoElement = () => {
    return(
      <div className="todoInfo">
        {title}
        <button onClick={()=>setIsEdit(true)}>Edit</button> 
        <button>Delete</button>
      </div>
    )
  }

  return (

    <div className="todo">
      {isEdit ? <FormEdit /> : <TodoElement />}
    </div>


  )
}
