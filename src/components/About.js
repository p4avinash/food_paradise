import { Outlet } from "react-router-dom"
import ProfileFunction from "./Profile"
import ProfileClass from "./ProfileClass"
import userContext from "../utils/userContext"

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <ProfileFunction type='Function' />
      <ProfileClass type='Class' />
      <Outlet />
      <userContext.Consumer>
        {({ name, email }) => {
          return (
            <div>
              Name: {name} <br />
              Email: {email}
            </div>
          )
        }}
      </userContext.Consumer>
    </div>
  )
}

export default About
