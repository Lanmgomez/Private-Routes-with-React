import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ element }) => {

  const LoggedInExist = localStorage.getItem('Logged')

  if (LoggedInExist === 'true') {
    return element
  } else {
    return <Navigate to="/" />
  }
}

export default PrivateRoute