import React from 'react'

const UseStatus = ({loggedIn, IsAdmin}) => {
  return (
    <div>
        {loggedIn && IsAdmin && <h2>Welcome Admin!</h2>}
        {loggedIn && !IsAdmin && <h2>Welcome User!</h2>}
    </div>
  )
}

export default UseStatus