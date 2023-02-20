import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { API_URL } from "../../../env"
import LoginTemplate from "../templates/LoginTemplate"


const Register = () => {
    const nav = useNavigate()

    const [error, setError] = useState()
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        setError()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
            details: {
                fullname: e.target.fullname.value
            }
        }
        
        axios.post(`${API_URL}/public/users`, data)
        .then( () => {
            nav("/login")
        })
        .catch(err => {
            setError(err)
            console.error(err)
        })
    }

    return(
        <LoginTemplate title="Registrate">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nombre Completo"
            name="fullname"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            required
          />
        </div>
        <div className="text-center pt-1 mb-12 pb-1">
          <button className="bg-gradient w-full" type="submit">
            Crear
          </button>
          <Link className="text-gray-500" to="/login">
            ¿Ya tiene una cuenta? Iniciar sesión
          </Link>
        </div>
        {error && (
          <p className="text-center p-2 bg-red-100 text-red-800">
            {error?.response?.data?.data}
          </p>
        )}
      </form>
    </LoginTemplate>
    )
}

export default Register