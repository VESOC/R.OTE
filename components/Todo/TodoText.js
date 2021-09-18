export default function TodoText({text, done}) {
    if(done)
        return (
            <div className='line-through'>
                {text}
            </div>
        )
    else
        return (
            <div>
                {text}
            </div>
        )
}