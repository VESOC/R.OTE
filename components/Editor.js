import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css'

export default function Editor() {
  const theme = 'snow'

  const modules = {
    toolbar: [['bold', 'italic', 'underline', 'strike']],
  }

  const formats = ['bold', 'italic', 'underline', 'strike']

  const { quillRef } = useQuill({ theme, modules, formats })

  return <div className='bg-gray-500' ref={quillRef}></div>
}