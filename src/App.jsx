import './App.css'
import { Outlet } from 'react-router-dom'
import NavbarMenu from './Components/NavbarMenu'

function App() {
  return (
    <>
     <NavbarMenu />
     <Outlet />
    </>
  )
}

export default App
