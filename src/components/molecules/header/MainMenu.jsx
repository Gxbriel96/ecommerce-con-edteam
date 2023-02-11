import { NavLink } from "react-router-dom"

const MainMenu = () =>{
    return(
        <nav className="w-full">
            <ul className="flex justify-end text-gray-100">
                <li className="flex items-center">
                    <NavLink className="menu-item" to="/" >
                        Inicio
                    </NavLink>
                </li>
                <li className="flex items-center">
                    <NavLink className="menu-item" to="/productos" >
                        Productos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainMenu
