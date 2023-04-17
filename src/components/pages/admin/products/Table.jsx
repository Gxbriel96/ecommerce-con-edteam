import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../../../../env"
import { getToken } from "../../../../helpers/auth"
import useFetch from "../../../../hooks/useFetch"

const Table = () => {
  const { data, error, loading } = useFetch("public/products")
  const params = useParams()
  const deleteProduct = (productId) => {
    if (window.confirm("¿Estas seguro que deseas eliminar?")) {
      axios
        .delete(`${API_URL}/admin/products/${productId}`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        })
        .then(() => alert("¡El producto ha sido eliminado!"))
        .catch((err) => console.log(err))
    }
  }
  if (loading) return <h1> Cargando...</h1>
  if (error) return <div>{error?.message}</div>

  return (
    <div className="max-w-256 m-auto">
      <section className="pt-10">
        <h1 className="text-4xl mb-6">Productos</h1>
        <div className="pt-1 mb-12 pb-1">
          <Link className="bg-gradient button" to="/admin/productos/crear">
            Agregar producto
          </Link>
        </div>
        <table className="overflow-x-scroll">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Editar</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan={4}>No existen productos actualmente</td>
              </tr>
            )}
            {data.map(({ id, product_name, price }) => (
              <tr key={id}>
                <td>{product_name}</td>
                <td>{price}</td>
                <td>
                  <Link to={`/admin/productos/editar/${id}`}>Editar</Link>
                </td>
                <td>
                  <Link
                    className="text-red-600"
                    onClick={() => deleteProduct(id)}
                  >
                    Eliminar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Table
