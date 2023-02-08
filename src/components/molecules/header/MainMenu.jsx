import { NavLink } from "react-router-dom"

const MainMenu = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/productos" >
                        Productos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainMenu
