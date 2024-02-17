import React from "react"
import { useRouteError, Link } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <div>
      <h1 className='font-bold text-3xl'>
        {error?.status
          ? `${error?.status} ${error?.statusText}`
          : "Oops, something went wrong"}
      </h1>
      <h1 className='font-bold text-3xl'>{`${
        error?.error?.message || "Can't fetch the error message"
      } !!`}</h1>
      <Link to='/'>
        <button className='btn border p-2 mt-4 bg-cyan-700 text-white rounded-lg shadow-xl active:translate-y-0.5'>
          Back To Home
        </button>
      </Link>
    </div>
  )
}

export default Error
