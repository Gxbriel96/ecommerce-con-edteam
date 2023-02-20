import axios from "axios"
import { API_URL } from "../../../../../env"
import { getToken } from "../../../../helpers/auth"

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      product_name: e.target.productName.value,
      price: Number(e.target.price.value),
      images: [e.target.image.value],
      description: e.target.description.value,
      features: {
        color: e.target.color.value,
      },
    }

    axios
      .post(`${API_URL}/admin/products`, data, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((resp) => {
        console.log(resp)
        alert("¡Producto creado!")
      })
      .catch((err) => {
        console.log(err)
        alert("ERROR AL CREAR EL PRODUCTO")
      })
  }
  return (
    <div>
      <h1>Crear Producto</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="productName" placeholder="Nombre" required />
        <input type="number" name="price" placeholder="precio" required />
        <input type="url" name="image" placeholder="Imágen" required />
        <textarea name="description" rows="10" required />
        <input type="text" name="color" placeholder="color" required />
        <button type="submit">Crear producto</button>
      </form>
    </div>
  )
}

export default Form
