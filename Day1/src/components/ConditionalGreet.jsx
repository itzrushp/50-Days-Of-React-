import React from 'react'

const ConditionalGreet = ({timeofDay}) => {
  return (
    <div>
        {timeofDay === 'morning' ? <h2>Good Morning SweetHeart!</h2> : <h2>Good afternoon Love :) </h2>}
    </div>
  )
}

export default ConditionalGreet