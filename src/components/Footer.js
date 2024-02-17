import { useContext } from "react"
import userContext from "../utils/userContext"

const Footer = () => {
  const { user } = useContext(userContext)

  return (
    <h4 className='text-white  flex justify-center p-8 bg-black text-xl'>
      This website is made by {user.name} with 🧡
    </h4>
  )
}
export default Footer
