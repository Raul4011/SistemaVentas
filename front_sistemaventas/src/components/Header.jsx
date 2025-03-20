import React from 'react'
import useStore from '../store/useStore'
import { useNavigate } from 'react-router-dom'
const Header = () => {

    const navigate = useNavigate()

    const {user,logOutUser} = useStore()

    const handleClick =()=>{
      logOutUser()
      alert("has cerrado tu sesion")
      navigate("/")
    }

  return (
    <div>
        <br />

        <h1>Sistema de Ventas 2025</h1>
        <br />
        <br />

        {user && <button className='btn btn-danger' style={{float:"right"}} onClick={handleClick}>logout</button>}
        
        <br />
        <br />
    </div>
  )
}

export default Header