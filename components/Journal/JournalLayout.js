import JournalHeader from '@/components/Journal/JournalHeader'
import JournalList from '@/components/Journal/JournalList'

export default function JournalLayout() {
  return (
    <div className='md:w-1/2 w-full h-full flex flex-col bg-gradient-to-br from-1 to-2'>
      <JournalHeader />
      <div className='w-full px-20 overflow-y-hidden mb-5'>
        <JournalList />
      </div>
    </div>
  )
}
