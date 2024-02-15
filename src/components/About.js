import { Outlet } from "react-router-dom"
import ProfileFunction from "./Profile"
import ProfileClass from "./ProfileClass"

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <ProfileFunction type="Function" />
      <ProfileClass type="Class" />
      <Outlet />
    </div>
  )
}

export default About
