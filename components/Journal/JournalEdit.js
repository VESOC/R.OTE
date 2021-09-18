import Editor from '@/components/Editor'

export default function JournalEdit({ setEdit }) {
  function getQuillResult() {}
  return (
    <div className='overflow-auto scrollbar-hidden'>
      <Editor />
      <button
        className='bg-green-300 w-auto p-2'
        onClick={() => setEdit(false)}
      >
        완료
      </button>
    </div>
  )
}
