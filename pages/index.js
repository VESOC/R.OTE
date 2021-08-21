import JournalLayout from '@/components/Journal/JournalLayout'
import TodoLayout from '@/components/Todo/TodoLayout'

export default function Index() {
  return (
    <div className='w-screen h-screen flex md:flex-row flex-col'>
      {/* <JournalLayout /> */}
      <TodoLayout />
      <div className='w-1/2 h-full bg-red-100'>
        <h1 className='w-1/2 mx-auto'>Test for width flex</h1>
      </div>
    </div>
  )
}
