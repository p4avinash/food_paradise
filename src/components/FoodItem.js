import React from "react"

const FoodItem = (item) => {
  let { name, price, imageId, defaultPrice } = item

  price = price ? price : defaultPrice

  return (
    <>
      <div className=' my-2 rounded-lg'>
        {
          <div className='flex p-2 shadow-lg rounded relative  m-4'>
            <div className='flex items-center'>
              <img
                className='w-28 h-28 rounded-lg mr-10'
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
                alt={name}
              />
              <div className='other-details mr-10'>
                <p className='text-lg font-bold'>{name}</p>
                <p className='text-lg font-semibold text-slate-500'>
                  ₹ {price / 100}
                </p>
              </div>

              <div className='add-remove flex  absolute right-20'>
                <button className='active:translate-y-1 active:scale-90 hover:ease-in-out duration-100 shadow-md text-lg font-bold bg-cyan-700 mx-3 rounded-lg w-8 h-8 flex justify-center items-center text-white p-2'>
                  -
                </button>
                count
                <button className='active:translate-y-1 active:scale-90 hover:ease-in-out duration-100 shadow-md text-lg font-bold bg-cyan-700 mx-3 rounded-lg w-8 h-8 flex justify-center items-center text-white p-2'>
                  +
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default FoodItem
