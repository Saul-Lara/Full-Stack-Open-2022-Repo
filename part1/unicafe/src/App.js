import { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodVote = () => setGood(good + 1)
  const neutralVote = () => setNeutral(neutral + 1)
  const badVote = () => setBad(bad + 1)

  return (
    <>
      <Header title='Give feedback:' />
      <Button onClick={goodVote} text='good' />
      <Button onClick={neutralVote} text='neutral' />
      <Button onClick={badVote} text='bad' />

      <Header title='Statistics:' />
      <div>
        <div>good {good}</div>
        <div>neutral {neutral}</div>
        <div>bad {bad}</div>
      </div>
    </>
  )
}

export default App