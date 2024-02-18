import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addItem, clearCart } from "../utils/slices/cartSlice"

const Profile = (props) => {
  const [count] = useState(0)

  const selector = useSelector((state) => {
    return state.cart.items
  })

  // console.log("selector", selector)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>This is a Functional based Component Profile</h2>
      <h3>Type: {props.type}</h3>
      <h3>Count: {count}</h3>
      <button
        className='p-2 bg-cyan-700 text-white rounded-lg'
        onClick={() => dispatch(clearCart())}
      >
        Click Me
      </button>
    </div>
  )
}

export default Profile
