export default function TodoItems({ children }) {
  return (
    <div className='shadow-lg m-5 px-5 py-3 bg-purple-200 rounded-2xl grid grid-flow-col grid-cols-1'>
      {children}
    </div>
  )
}
