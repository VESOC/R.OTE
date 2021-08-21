import { FaEdit } from 'react-icons/fa'
import { useState } from 'react'

export default function JournalItem({ id, day }) {
  const [doEdit, setDoEdit] = useState(false)
  const editState = () => {
    setDoEdit(true)
    console.log('edit state!')
  }
  return (
    <div
      id={id}
      className={`w-full rounded-md p-2 ${
        day === 'past'
          ? 'bg-gray-300'
          : day === 'future'
          ? 'bg-white'
          : 'bg-yellow-100'
      } flex`}
    >
      <div className='w-1/12 flex justify-center'>
        <h1>{id}</h1>
      </div>
      {doEdit && <div className='w-10/12'>Today was rainy.</div>}
      {!doEdit && <div className='w-10/12'>Today no one was happy.</div>}
      <div className='w-1/12 flex justify-center'>
        <button onClick={editState}>
          <FaEdit />
        </button>
      </div>
    </div>
  )
}
