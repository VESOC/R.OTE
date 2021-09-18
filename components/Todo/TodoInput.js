import { useState } from "react"
export default function TodoInput({ addItem }) {
  const [todo, setTodo] = useState("")

  let handleClick = () => {
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      done: false,
    };
    addItem(newTodo)
    setTodo("")
  };
  let handleKeyPress = (e) => {
    if(e.key === "Enter"){
      handleClick()
    }
  };
  return (
    <div className='flex flex-row'>
      <input
        className='shadow appearance-none border rounded-full w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id='username'
        type='text'
        placeholder='NothingToDo'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button
        className='ml-5 bg-gray-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-l w-20'
        onClick={handleClick}
      >
        추가
      </button>
    </div>
  )
}
