import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { UserProvider } from "./context/UserContext"
import RouterG from "./router/RouterG"
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <UserProvider>
      <RouterProvider router={RouterG} />
    </UserProvider>
  </CartProvider>
)
