const { connection } = require("../database/config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const signOptions = { expiresIn: "1h" };
const fs = require("fs");

const getAllUsers = (req, res) => {
 const query =`select * from usuarios`

 connection.query(query,(err,results)=>{
  if (err) throw err
  res.status(200).send({message:"todos lños usuarios",results})
 })
};


const createUser = async(req, res) => {
  const { nombre, email, contraseña } = req.body;

  const hashedPassword = await bcrypt.hash(contraseña,10)

  const query = "INSERT into Usuarios (nombre,email,contraseña) values (?,?,?)";

  try {
    connection.query(query, [nombre,email,hashedPassword], (err, results) => {
      if (err)
        return res.status(500).send({ message: "error al crear un usuario" });
      res.send({ message: "usuario creado correctamente", results });
    });
  } catch (error) {
    console.log(error);
  }
};

const AuthLogin = (req, res) => {
  const { nombre, contraseña } = req.body;

  console.log(nombre,contraseña);
  const query = `select * from usuarios where nombre=?`;

  try {
    connection.query(query, [nombre], async (err, results) => {
        if (err) throw err

      const user = results[0];

      //console.log(user);

      if (user) {
        const validpassword = await bcrypt.compare(contraseña, user.contraseña);

        if (validpassword) {
        //     const secret = fs.readFileSync("../keys/private.pem");
        //   console.log(secret);

          const token = jwt.sign(
            { 
              id: user.id,
              nombre: user.nombre,
              rol: user.rol 
            },
            process.env.SECRET,
            signOptions
          );
          res.status(200).send({message:"token creado correctamente",token})
        } else {
          res.status(404).send({ message: "la contraseña no es valida" });
        }
      } else {
        return res.status(404).send({ message: "usuario no encontrado" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllUsers, createUser, AuthLogin };
