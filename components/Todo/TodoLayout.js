import ToDoInput from '@/components/Todo/TodoInput'
import TodoItems from './TodoItems'
import { useState, useEffect } from 'react'

export default function TodoLayout() {
  const [todos, setTodos] = useState([])

  function deleteAll() {
    if (window.confirm('실제로 지우시겠습니까?')) {
      setTodos([])
    }
  }
  function addItem(todo) {
    setTodos([...todos, todo])
  }
  return (
    <div className='md:w-1/2 p-5 bg-red-500 text-white h-full w-full'>
      <main className='flex flex-col m-auto w-full h-full '>
        <h1 className='text-3xl block font-bold py-2 text-white tracking-widest text-center'>
          ToDoList
        </h1>

        <div className='h-full p-6 bg-red-100 rounded-2xl relative'>
          <div className='flex justify-center'>
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
          <TodoItems />
          {todos.map((todo) => (
            <p className='text-blue-900' key={todo}>
              {todo}
            </p>
          ))}
        </div>
      </main>
    </div>
  )
}
const App = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [todoEditing, setTodoEditing] = useState(null)
  const [editingText, setEditingText] = useState('')

  useEffect(() => {
    const json = localStorage.getItem('todos')
    const loadedTodos = JSON.parse(json)
    if (loadedTodos) {
      setTodos(loadedTodos)
    }
  }, [])

  useEffect(() => {
    const json = JSON.stringify(todos)
    localStorage.setItem('todos', json)
  }, [todos])

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText
      }
      return todo
    })
    setTodos(updatedTodos)
    setTodoEditing(null)
  }

  return (
    <div id='todo-list'>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type='submit'>Add Todo</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id} className='todo'>
          <div className='todo-text'>
            <input
              type='checkbox'
              id='completed'
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.id === todoEditing ? (
              <input
                type='text'
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className='todo-actions'>
            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}
