const {connection} = require("../database/config")

const getAllProducts =(req,res) =>{
    const query = `select * from productos`

    connection.query(query,(err,result)=>{
        if(err) return res.status(500).json({message:err})
            res.json(result)
    })
}

const oneProduct =(req,res) =>{

    const id = req.params.id

    const query = `select * from productos where id=?`

    connection.query(query,[id],(err,result)=>{
        if(err) return res.status(500).json({message:err})
            res.json(result)
    })
}

module.exports = {getAllProducts,oneProduct}