import React from 'react'
import {Row,Col,Table} from "react-bootstrap"
import useFecthProducts from '../custonHooks/useFetchProducts'
import { MdEditSquare,MdDeleteSweep  } from "react-icons/md";

const MainProducts = () => {

  const {products,loading} = useFecthProducts()


  return (
    <div>
     <button className="btn btn-success">Agregar</button>
          <div className="container">
            {loading ? (
              <h3>cargando...</h3>
            ) : (
              <Row>
                {products.length === 0 ? (
                  <p>No hay productos disponibles.</p>
                ) : (
                  <Table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id}>
                          <td>{product.id}</td>
                          <td>{product.nombre}</td>
                          <td>{product.descripcion}</td>
                          <td>{product.precio}</td>
                          <td>
                            <button className="btn btn-danger">
                              <MdDeleteSweep />
                            </button>
                            <button className="btn btn-warning">
                              <MdEditSquare />
                            </button>

                            <button></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Row>
            )}
          </div>
    </div>
  )
}

export default MainProducts