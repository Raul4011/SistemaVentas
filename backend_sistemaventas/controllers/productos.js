const {connection} = require("../database/config")


const getAllProducts =(req,res) =>{
    const query = `select * from productos where disponible=1`

    connection.query(query,(err,result)=>{
        if(err) return res.status(500).json({message:err})
            res.json(result)
    })
}

const oneProduct =(req,res) =>{

    const id = req.params.id

    const query = `select * from productos where id=? and disponible=1`

    connection.query(query,[id],(err,result)=>{
        if(err) return res.status(500).json({message:err})
            res.json(result)
    })
}

const createProduct =(req,res) =>{
    const {nombre,descripcion,precio,stock} = req.body
    const values = [nombre,descripcion,precio,stock]

    const query = `INSERT INTO productos (nombre,descripcion,precio,stock) values(?,?,?,?)`

    try {
        connection.query(query,values,(err,results)=>{
            if (err) return res.status(500).send({message:"error "+err})
            res.status(201).send({message:"producto creado correctamente",results})    
        })
    } catch (error) {
        console.error(error);
    }

}

const updateProduct =(req,res) =>{
    const id = req.params.id
    const {nombre,descripcion,precio,stock} = req.body
    const values = [nombre,descripcion,precio,stock,id]

    const query = `update productos set nombre=?,descripcion=?,precio=?,stock=? where id=?`

    try {
        connection.query(query,values,(err,results)=>{
            if (err) return res.status(500).send({message:"error "+err})
            res.status(200).send({message:"producto editado correctamente",results})    
        })
    } catch (error) {
        console.error(error);
    }

}

const deleteProduct =(req,res)=>{
    const id = req.params.id


    const query = `update productos set disponible=0 where id=?`

    try {
        connection.query(query,[id],(err,results)=>{
            if (err) return res.status(500).send({message:"error "+err})
            res.status(200).send({message:"producto borrado correctamente",results})    
        })
    } catch (error) {
        console.error(error);
    }
}

module.exports = {getAllProducts,oneProduct,createProduct,updateProduct,deleteProduct}