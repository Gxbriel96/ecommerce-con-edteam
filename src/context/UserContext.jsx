import axios from "axios"
import { createContext, useEffect, useState } from "react"
import { API_URL } from "../../env"
import { getToken } from "../helpers/auth"

const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState()

  useEffect(() => {
    if (getToken) {
      axios
        .get(`${API_URL}/private/users`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        })
        .then((resp) => {
          setUserData(resp.data.data)
        })
    }
  }, [])

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }