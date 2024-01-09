import { IMG_CDN_URL } from "../constants"

const RestaurantCard = ({ restaurant }) => {
  let imageUrl = `${IMG_CDN_URL}${restaurant?.info?.cloudinaryImageId}`
  let name = restaurant?.info?.name || "Not Found"
  let cuisines = restaurant?.info?.cuisines || "Not Found"
  let rating = restaurant?.info?.avgRating || "Not Found"
  let distance = restaurant?.info?.sla?.lastMileTravelString || "Not Found"

  return (
    <div className='card'>
      <img src={imageUrl} alt='food-image' />
      <p className='restaurant-name'>
        {name.length <= 20 ? name : `${name.substring(0, 20)}...`}
      </p>
      <p className='restaurant-cuisines'>
        {cuisines.join(", ").length <= 40
          ? cuisines.join()
          : `${cuisines.join().substring(0, 30)}...`}
      </p>
      <div className='other-details'>
        <p>{rating} ⭐ </p>
        <p>{distance}</p>
      </div>
    </div>
  )
}

export default RestaurantCard
