import ToDoInput from "@/components/Todo/TodoInput"
import TodoItems from "@/components/Todo/TodoItems"
import { useState, useEffect } from "react"
import TodoText from "@/components/Todo/TodoText"

export default function TodoLayout() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  const [todoEditing, setTodoEditing] = useState(null)
  const [editingText, setEditingText] = useState("")
  useEffect(() => {
    const json = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(json)
    if (loadedTodos) {
      setTodos(loadedTodos)
    }
  }, [])

  useEffect(() => {
    const json = JSON.stringify(todos)
    localStorage.setItem("todos", json)
  }, [todos])

  function deleteAll() {
    if (window.confirm("실제로 지우시겠습니까?")) {
      setTodos([])
    }
  }
  function addItem(todo) {
    if (todo.text !== "") {
      setTodos([...todos, todo])
    }
  }
  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id && editingText !== "") {
        todo.text = editingText
      }
      return todo
    })
    setTodos(updatedTodos)
    setTodoEditing(null)
  }

  function doneTodo(id){
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className='md:w-1/2 p-5 bg-1 text-white h-full w-full bg-gradient-to-br from-4 to-9'>
      <main className='flex flex-col m-auto w-full h-full'>
        <h1 className='text-3xl block font-bold py-2 text-white tracking-widest text-center'>
          ToDoList
        </h1>

        <div className='overflow-y-scroll h-full p-6 bg-red-100 rounded-2xl relative'>
          <div className='flex justify-center m-3'>
            <ToDoInput addItem={addItem} />
            <button
              className='bg-gray-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-r w-30'
              onClick={() => {
                deleteAll()
              }}
            >
              전체삭제
            </button>
          </div>

          {todos.map((todo) => (
            <TodoItems>
              <div className='todo-text' key={todo}>
                {todo.id === todoEditing ? (
                  <input
                    className='text-gray-500'
                    type='text'
                    onChange={(e) => setEditingText(e.target.value)}
                    value={editingText}
                  />
                ) : (
                  <TodoText text={todo.text} done={todo.done}></TodoText>
                )}
              </div>
              <div>
                <button className='bg-blue-500 rounded-full px-4 hover:bg-green-500' onClick={() => {doneTodo(todo.id)}}>Done</button>
                {todo.id === todoEditing ? (
                  <button className='bg-blue-500 rounded-full px-4 hover:bg-blue-400' onClick={() => submitEdits(todo.id)}>
                    ✔
                  </button>
                ) : (
                  <button className='bg-blue-500 rounded-full px-4 hover:bg-blue-400' onClick={() => {setTodoEditing(todo.id); setEditingText(todo.text)}}>Edit</button>
                )}
                <button className='bg-blue-500 rounded-full px-4 hover:bg-red-400' onClick={() => deleteTodo(todo.id)}>✖</button>
              </div>
            </TodoItems>
          ))}
        </div>
      </main>
    </div>
  )
}
