import React from "react"

const Shimmer = () => {
  return (
    <div
      data-testid='shimmer'
      className='restaurant-list justify-center drop-shadow-xl grid-rows-3 gap-2 flex  flex-wrap mt-4 p-4'
    >
      {Array(15)
        .fill("")
        .map((item, index) => (
          <div
            key={index}
            className='shimmer-card leading-10 p-4 m-2 bg-white rounded-lg w-72'
          >
            <div className='shimmer-img w-full h-56 bg-cover bg-cente bg-slate-300' />
            <p className='shimmer-name w-full h-5 bg-slate-300'></p>
            <p className='shimmer-cuisines w-full h-5 bg-slate-300'></p>
            <div className='shimmer-other-details font-bold flex w-full'>
              <p className='mr-4 '></p>
              <p></p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Shimmer
