import React, { useState } from 'react'
import {Row,Modal,Table,Form,Button} from "react-bootstrap"
import useFecthProducts from '../custonHooks/useFetchProducts'
import { MdEditSquare,MdDeleteSweep  } from "react-icons/md";
import "../css/MainProducts.css"

const MainProducts = () => {

  const {products,loading,deleteProduct,updateProduct,createProduct} = useFecthProducts()

  const initialState = {
    nombre:"",
    descripcion:"",
    precio:null,
    stock:0
  }


  const [showModal,setShowModal] = useState(false)
  const [product,setProduct] = useState(initialState)
  const [editing,setEditing] = useState(false)


  const handleEditClick = (product) => {
    setEditing(true)
    setProduct(product); // Cargar los datos del producto
    setShowModal(true); // Mostrar el modal
  };

  const handleCloseModal  = () =>{
    setShowModal(false)
  }

  const handleInputChange =(e) =>{

    const {name,value} = e.target
    setProduct({...product,[name]:value})
  }
  const handleSave=() =>{

    if (editing) {
      updateProduct(product)
    }else {
      createProduct(product)
    }
    
    setShowModal(false)
  }
  const handleAgregar = () =>{
    setEditing(false)
    setShowModal(true)
  }

  return (
    <div>
     <button className="btn btn-success" onClick={handleAgregar}>Agregar</button>
          <div className="container">
            {loading ? (
              <h3>cargando...</h3>
            ) : (
              <Row>
                {products.length === 0 ? (
                  <p>No hay productos disponibles.</p>
                ) : (
                  <Table className='table-striped'>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
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
                          <td>{product.stock}</td>
                          <td>
                            <button className="btn btn-danger" onClick={()=>deleteProduct(product.id)}>
                              <MdDeleteSweep />
                            </button>
                            <button className="btn btn-warning" onClick={()=>handleEditClick(product)}>
                              <MdEditSquare />
                            </button>

                          
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Row>
            )}
          </div>
          <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="productName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del producto"
                name="nombre"
                value={product.nombre}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="productDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Descripción del producto"
                name="descripcion"
                value={product.descripcion}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="productPrice">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Precio"
                name="precio"
                value={product.precio}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="productPrice">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Stock"
                name="stock"
                value={product.stock}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave}>
          {editing ? "Actualizar Producto" : "Agregar Producto"}
          </Button>
        </Modal.Footer>
       
      </Modal>
    </div>
  )
}

export default MainProducts