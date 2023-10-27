import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./NavbarMenu.css"
import { Button } from 'antd'

const NavbarMenu = () => {

    const navigate = useNavigate()

    function logOut() {
        navigate("/")
        localStorage.removeItem("Logged")
        window.location.reload
    }

  return (
    <div className='navbar'>
        <ul>
            {localStorage.length == "" ? 
                (<li><Link to="/">Login</Link></li>) : 
                (<li><Button onClick={logOut}>Log Out</Button></li>)
            }
            <li>
                <Link to="/cadastros">Cadastros</Link>
            </li>
            <li>
                <Link to="/relatorios">Relatorios</Link>
            </li>
            <li>
                <Link to="/investimentos">Investimentos</Link>
            </li>
        </ul>
    </div>
  )
}

export default NavbarMenu