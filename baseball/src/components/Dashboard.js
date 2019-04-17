import React from 'react'

const Dashboard = props => {
  return (
    <div>
        <button
        onClick={props.addBall}
        >ball</button>
        <button
        onClick={props.addStrike}
        >strike</button>
        <button
        onClick={props.addFoul}
        >foul</button>
        <button
        onClick={props.addHit}
        >hit</button>
    </div>
  )
}

export default Dashboard
