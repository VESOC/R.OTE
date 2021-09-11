import { FaEdit } from 'react-icons/fa'
import { useState } from 'react'
import { Editor } from '@/components/Editor'

export default function JournalItem({ id, day, setEdit }) {
  const editJournal = (id) => {
    let journal = document.getElementById(id)
    setEdit(true)
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
      } flex h-16`}
    >
      <div className='w-1/12 flex justify-center'>
        <h1>{id}</h1>
      </div>
      <div className='w-10/12'>Today no one was happy.</div>
      <div className='w-1/12 flex justify-center'>
        <button onClick={() => editJournal(id)}>
          <FaEdit />
        </button>
      </div>
    </div>
  )
}
