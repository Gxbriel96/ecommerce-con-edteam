import { Link } from "react-router-dom"

const Logo =()=>{
    return(
        <div className="flex">
            <Link to="/"> 
                <img src="https://ed.team/images/logo/logo-monocolor.svg" alt="Logo tienda online" />
            </Link>
        </div>
    )
}

export default Logo
