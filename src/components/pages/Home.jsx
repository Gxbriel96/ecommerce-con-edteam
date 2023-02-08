/* import axios from "axios"
import { useEffect, useState } from "react" */
import { API_URL } from "../../../env"

const Home = () => {
  
  /* const [data, setData] = useState({})
  //User admin del curso
  const user = { "email": "beto@ed.team",
  "password": "123abc"
  }

  useEffect(()=>{
    axios.get(`${API_URL}/public/products`)
    .then(d => setData(d.data))
    .catch( e => console.error(e))
  },[])
  console.log(data) */
  return (
    <div>
      <h1>Hola chanchito{API_URL}</h1>
      <p>Esta es una prueba</p>
    </div>
  )
}

export default Home
