import React from "react"

const Shimmer = () => {
  return (
    <div className='restaurant-list'>
      {Array(15)
        .fill("")
        .map((item, index) => (
          <div key={index} className='shimmer-card'>
            <div className='shimmer-img' />
            <p className='shimmer-name'></p>
            <p className='shimmer-cuisines'></p>
            <div className='shimmer-other-details'>
              <p></p>
              <p></p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Shimmer
