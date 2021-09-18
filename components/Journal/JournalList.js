import { useEffect, useState } from 'react'
import JournalItem from '@/components/Journal/JournalItem'
import JournalEdit from '@/components/Journal/JournalEdit'

export default function JournalList() {
  const [edit, setEdit] = useState(false)
  const date = new Date()
  const month = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  let array = []
  for (let i = 1; i <= month; i++) {
    let day = 'future'
    if (i < date.getDate()) {
      day = 'past'
    }
    if (i == date.getDate()) {
      day = 'today'
    }
    array.push(<JournalItem key={i} id={i} day={day} setEdit={setEdit} />)
  }
  useEffect(() => {
    if (edit) return
    document
      .getElementById(`${date.getDate() - 3 > 0 ? date.getDate() - 3 : 1}`)
      .scrollIntoView()
  })
  return (
    <div
      id='items'
      className={`flex flex-col gap-y-3 overscroll-none ${
        !edit ? 'overflow-y-scroll scrollbar-hidden h-full' : 'h-screen'
      }`}
    >
      {!edit && array}
      {edit && <JournalEdit setEdit={setEdit} />}
    </div>
  )
}
