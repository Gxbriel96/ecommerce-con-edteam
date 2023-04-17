import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../../../context/UserContext"
import { deleteToken, getToken } from "../../../helpers/auth"

const MainMenu = () => {
  const nav = useNavigate()
  const { userData, setUserData } = useContext(UserContext)
  const handleSession = () => {
    deleteToken()
    setUserData()
    nav("/")
  }
  return (
    <nav className="w-full">
      <ul className="flex justify-end text-gray-100">
        <li className="flex items-center">
          <NavLink className="menu-item" to="/">
            Inicio
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink className="menu-item" to="/productos">
            Productos
          </NavLink>
        </li>
        {!getToken() ? (
          <li className="flex items-center">
            <NavLink className="menu-item" to="/login">
              Inciar Sesión
            </NavLink>
          </li>
        ) : (
          <>
            {userData?.is_admin && (
              <li className="flex items-center">
                <NavLink className="menu-item" to="/admin/productos">
                  Administrar Productos
                </NavLink>
              </li>
            )}
            <li className="flex items-center">
              <NavLink onClick={handleSession} className="menu-item">
                Cerrar Sesión
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default MainMenu
