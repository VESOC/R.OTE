export default function Color() {
  let array = [
    '#FD151B',
    '#F79489',
    '#F24333',
    '#F4B9B8',
    '#FADCD9',
    '#F8AFA6',
    '#F9F1F0',
    '#F7BEC0',
    '#EF233C',
  ]
  let colors = []
  for (let i = 0; i < array.length; i++) {
    colors.push(
      <div
        key={i}
        style={{ width: '150px', height: '150px', backgroundColor: array[i] }}
      >
        {i + 1} {array[i]}
      </div>
    )
  }
  return <div className='flex flex-wrap gap-y-3 gap-x-5'>{colors}</div>
}
