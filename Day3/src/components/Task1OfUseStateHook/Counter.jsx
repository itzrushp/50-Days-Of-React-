import React, { useState } from 'react'

const Counter = () => {
    const [count , setCount ] = useState(0);
    const clickHandler = () => {
        setCount(prev => prev + 1);
    }
  return (
    <div>
        <p>Count at the moment is {count}</p>
        <button onClick={clickHandler}>Click Me to increment</button>
    </div>
  )
}

export default Counter