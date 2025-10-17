import { useState } from "react"


function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => {
    const updateGood = good+1;
    setGood(updateGood);
    setTotal(updateGood + neutral + bad);

  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(good + updatedNeutral + bad);
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1; 
    setBad(updatedBad) ; 
    setTotal(good + neutral + updatedBad);
  }

  const avg = (good + bad + neutral) === 0 ? 0 : (good - bad) / (good + bad + neutral)
  const positive = (good) === 0 ? 0 : ((good) / (good + bad + neutral) * 100)

  return (
    <>
      <div>
        <h1>Welcome to Feedback Review</h1>
        
        <button onClick={handleGoodClick}> good</button> 
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
        <h2>Statistics</h2>
        <Stats 
          good={good} 
          neutral={neutral} 
          bad={bad}
          total={total}
          avg={avg}
          positive={positive}
        />
      </div>
    </>
  )
}

const Stats = ({good, neutral, bad, total, avg, positive}) => {
  if(good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    );
  } 
  return (
    <div>
      <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {total}</p>
        <p>Average {avg}</p>
        <p>positive {positive}%</p>
    </div>
  );
}

export default App
