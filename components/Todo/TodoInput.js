import { useState } from 'react'

export default function TodoInput({ addItem }) {
  const [todo, setTodo] = useState('')

  return (
    <div className='flex flex-row'>
      <input
        className='shadow appearance-none border rounded-full w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id='username'
        type='text'
        placeholder='NothingToDo'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className='ml-5 bg-gray-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-l w-15'
        type='submit'
        onClick={() => {
          addItem(todo.trim())
          setTodo('')
        }}
      >
        추가
      </button>
    </div>
  )
}
