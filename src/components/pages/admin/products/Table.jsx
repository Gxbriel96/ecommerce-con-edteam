import useFetch from "../../../../hooks/useFetch"

const Table = () => {
  const { data, error, loading } = useFetch("public/products")
  if (loading) return <h1> Cargando...</h1>
  if (error) return <h1>error en la petición de productos</h1>
  return (
    <div>
      <h1>Productos</h1>
      {data.length === 0 ? (
        <p> no existen productos</p>
      ) : (
        data.map((prod) => <div key={prod.id}>{JSON.stringify(prod)}</div>)
      )}
    </div>
  )
}

export default Table
