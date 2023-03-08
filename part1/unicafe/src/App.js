import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, value }) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (prop) => {
  if (prop.all === 0) {
    return (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
    )
  }
  return (
  <div>
    <h1>statistics</h1>
    <table>
      <tbody>
        <StatisticLine text='good' value={prop.good} />
        <StatisticLine text='neutral' value={prop.neutral} />
        <StatisticLine text='bad' value={prop.bad} />
        <StatisticLine text='all' value={prop.all} />
        <StatisticLine text='average' value={prop.average} />
        <StatisticLine text='positive' value={prop.percent} />
      </tbody>
    </table>
  </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const goodFeedback = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const neutralFeedback = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const badFeedback = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  const averageScore = () => (good - bad) / all

  const percentPositive = () => {
    return ((good * 100 / all) + ' %')
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodFeedback} text={'good'} />
      <Button handleClick={neutralFeedback} text={'neutral'} />
      <Button handleClick={badFeedback} text={'bad'} />
      <Statistics good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average= {averageScore()}
        percent={percentPositive()} />
    </div>
  )
}

export default App