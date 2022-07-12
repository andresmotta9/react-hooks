import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//   id: 123,
//   name: 'Andres',
//   email: 'andres@mail.com'
// }

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{ hi: 'world', user}}>
    <UserContext.Provider value={{ user, setUser }}>
      { children }
    </UserContext.Provider>
  )
}
