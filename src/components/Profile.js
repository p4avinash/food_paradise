 import { useState } from "react"

const Profile = (props) => {
  const [count] = useState(0)
  return (
    <div>
      <h2>This is a Functional based Component Profile</h2>
      <h3>Type: {props.type}</h3>
      <h3>Count: {count}</h3>
    </div>
  )
}
 
export default Profile
