import { useState } from 'react'

const Header = ({ title }) => <h1>{title}</h1>

const Title = ({ title }) => <h2>{title}</h2>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({ text, value }) => <div>{text}: {value}</div>

const Statistics = ({ data }) => {
  let good = data.good
  let neutral = data.neutral
  let bad = data.bad

  let totalVotes = good + neutral + bad

  if (totalVotes <= 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  let averageValue = `${((good * 1) + (neutral * 0) + (bad * -1)) / (totalVotes)}`

  let positivePercentage = `${(good * 100) / (totalVotes)}%`

  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={totalVotes} />
      <StatisticLine text="average" value={averageValue} />
      <StatisticLine text="positive" value={positivePercentage} />
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodVote = () => setGood(good + 1)
  const neutralVote = () => setNeutral(neutral + 1)
  const badVote = () => setBad(bad + 1)

  let votesInfo = {
    good: good,
    neutral: neutral,
    bad: bad
  }

  return (
    <>
      <Header title='Unicafe' />
      <Title title='Give feedback:' />
      <Button onClick={goodVote} text='good' />
      <Button onClick={neutralVote} text='neutral' />
      <Button onClick={badVote} text='bad' />

      <Title title='Statistics:' />
      <Statistics data={votesInfo} />
    </>
  )
}

export default App