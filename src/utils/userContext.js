import { createContext } from "react"

const userContext = createContext({
  name: "p4avinash",
  email: "john@abc.com",
})

userContext.displayName = "UserContext"

export default userContext
