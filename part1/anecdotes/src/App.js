import { useState } from 'react'

const Subtitle = ({ subtitle }) => <h2>{subtitle}</h2>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0))

  const maxPoints = Math.max(...points)
  const mostVoted = points.indexOf(maxPoints)

  const randomAnecdote = () => {
    let totalAnecdotes = anecdotes.length
    let randomIndex = Math.floor(Math.random() * totalAnecdotes)

    setSelected(randomIndex)
  }

  const handleVoteClick = () => {
    const copyPointsArray = [...points]
    copyPointsArray[selected] += 1

    setPoints(copyPointsArray)
  }

  return (
    <div>
      <Subtitle subtitle='Anecdote of the day' />
      <p>{anecdotes[selected]}</p>
      <p>This quote has {points[selected]} votes</p>
      <Button onClick={handleVoteClick} text='Vote' />
      <Button onClick={randomAnecdote} text='Next anecdote' />

      <Subtitle subtitle='Anecdote with most votes' />
      <p>{anecdotes[mostVoted]}</p>
      <p>This quote has {points[mostVoted]} votes</p>
    </div>
  )
}

export default App