import { useEffect } from 'react'
import JournalItem from '@/components/Journal/JournalItem'

export default function JournalList() {
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
    array.push(<JournalItem key={i} id={i} day={day} />)
  }
  useEffect(() => {
    document
      .getElementById(`${date.getDate() - 3 > 0 ? date.getDate() - 3 : 1}`)
      .scrollIntoView()
  })
  return (
    <div
      id='items'
      className='flex flex-col h-full gap-y-3 overscroll-none overflow-y-scroll scrollbar-hidden'
    >
      {array}
    </div>
  )
}
