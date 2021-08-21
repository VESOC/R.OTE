import JournalHeader from '@/components/Journal/JournalHeader'
import JournalList from '@/components/Journal/JournalList'

export default function JournalLayout() {
  return (
    <div className='md:w-1/2 w-full h-full flex flex-col bg-gray-400'>
      <JournalHeader />
      <div className='w-full px-20 overflow-y-hidden mb-5'>
        <JournalList />
      </div>
    </div>
  )
}
