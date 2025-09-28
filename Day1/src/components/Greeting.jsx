import React from 'react'

const Greeting = () => {

const greetingtext = "Good morning sweetie";
const date = new Date();

  return (
    <div>
        <h1>Hey there {greetingtext}</h1>
        <p>Today's Date is {date.getDate()}th of {date.getMonth()}th Month</p>
    </div>
  )
}

export default Greeting