import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import RouterG from './router/RouterG'
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={RouterG}/>
  
)
