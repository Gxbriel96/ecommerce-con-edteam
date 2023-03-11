import { NavLink } from "react-router-dom"

const AdminMenu = () => {
  return (
    <nav className="w-full">
      <ul className="flex justify-end text-gray-100">
        <li className="flex items-center">
          <NavLink className="menu-item" to="/productos">
            Productos
          </NavLink>
        </li>

        <li className="flex items-center">
          <NavLink className="menu-item" to="/">
            Volver a la App
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default AdminMenu
