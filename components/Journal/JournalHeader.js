export default function JournalHeader() {
  return (
    <div className='flex md:flex-row flex-col justify-center gap-x-4 mx-10 my-5'>
      <h1 className='text-3xl uppercase'>
        <strong>Journal</strong>
      </h1>
      <div className='flex self-center'>
        <b>{`${
          new Date().getMonth() + 1
        }. ${new Date().getDate()}. ${new Date().getFullYear()}.`}</b>
      </div>
    </div>
  )
}
