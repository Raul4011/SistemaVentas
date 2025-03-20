import React from 'react'
import {Outlet,Navigate} from "react-router-dom"
import useStore from '../store/useStore'

const PrivateRoute = () => {

    const {user} = useStore()

  return user ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRoute