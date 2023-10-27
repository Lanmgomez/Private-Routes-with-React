import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cadastros from './Pages/Cadastros.jsx'
import Relatorios from './Pages/Relatorios.jsx'
import Investimentos from './Pages/Investimentos.jsx'
import Login from './Pages/Login.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'

const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Login />},
      { path: "/cadastros", element: <PrivateRoute element={<Cadastros />} />},
      { path: "/relatorios", element: <PrivateRoute element={<Relatorios />} />},
      { path: "/investimentos", element: <PrivateRoute element={<Investimentos />} />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes} />
)
