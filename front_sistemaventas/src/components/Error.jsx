import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
  return (
    <div>
        <br />
        <br />
        <h3>Upppss Pagina no encontrada</h3>
        <br />
        <img src="https://http.cat/images/404.jpg" alt="" />
        <br />
        <Link to="/products">volver</Link>
        <br />
    </div>
  )
}

export default Error