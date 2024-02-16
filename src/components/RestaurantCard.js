import { IMG_CDN_URL } from "../constants"

const RestaurantCard = ({ restaurant }) => {
  let imageUrl = `${IMG_CDN_URL}${restaurant?.info?.cloudinaryImageId}`
  let name = restaurant?.info?.name || "Not Found"
  let cuisines = restaurant?.info?.cuisines || "Not Found"
  let rating = restaurant?.info?.avgRating || "Not Found"
  let distance = restaurant?.info?.sla?.lastMileTravelString || "Not Found"

  return (
    <div className='card p-4 m-2 break-words hover:scale-90 hover:ease-in-out duration-300 bg-white rounded-lg w-72 leading-10'>
      <img
        className='w-full h-40 bg-cover rounded-md bg-center'
        src={imageUrl}
        alt='food-image'
      />
      <p className='restaurant-name text-xl font-bold'>
        {name.length <= 20 ? name : `${name.substring(0, 20)}...`}
      </p>
      <p className='restaurant-cuisines text-md text-gray-600'>
        {cuisines.join(", ").length <= 35
          ? cuisines.join()
          : `${cuisines.join().substring(0, 30)}...`}
      </p>
      <div className='other-details font-bold flex w-full'>
        <p className='mr-4 '>{rating} ⭐ </p>
        <p>{distance}</p>
      </div>
    </div>
  )
}

export default RestaurantCard
