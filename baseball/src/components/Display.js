import React from 'react'

const Display = props => {
  return (
    <div>
      <p>balls: {props.balls}</p>
      <p>strikes: {props.strikes}</p>
      <p>fouls: {props.fouls}</p>
      <p>hits: {props.hits}</p>
    </div>
  )
}

export default Display
