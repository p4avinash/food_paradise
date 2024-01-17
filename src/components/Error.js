import React from "react"
import { useRouteError, Link } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <div>
      <h1>{`${error.status} ${error.statusText}`}</h1>
      <h1>{`${error.error.message} !!`}</h1>
      <Link to='/'>
        <button className='btn'>Back To Home</button>
      </Link>
    </div>
  )
}

export default Error
