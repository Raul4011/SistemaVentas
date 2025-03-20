import {useState} from 'react'
import {Form,Button} from "react-bootstrap"
import useStore from '../store/useStore'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { BASE_URL_USERS } from '../routes/paths.js'


const MainLogin = () => {

    const navigate = useNavigate()

    const {loginUser} = useStore()

    const [usuario,setUsuario] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          let response = await axios.post("http://localhost:8000/users/auth", {
            nombre: usuario,
            contraseña: password,
          });
          alert("Welcome BOSS")
          loginUser(response.data.token);
          navigate("/admin/dashboard");
        } catch (error) {
          if (error.response) {
            // Si hay un error en la respuesta del servidor
            console.log("Error de autenticación:", error.response.data);
      
            // Mostrar mensaje de error al usuario
            alert(error.response.data.message);  // Muestra el mensaje en la UI
          } else {
            // Si el error es de red, o de otra naturaleza
            console.log("Error de red o configuración:", error);
            alert("Error de conexión al servidor");
          }
        }
        e.target.reset()
      };
      
  return (
    <div>
        <br />
        <Form action="" onSubmit={handleSubmit}>
            <Form.Label htmlFor="">usuario</Form.Label>
            <Form.Control type="text" onChange={(e)=>setUsuario(e.target.value)}/>
            <br />
            <Form.Label htmlFor="">password</Form.Label>
            <Form.Control  type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <br />
            <Button type='submit' className='btn btn-success'>login</Button>
        </Form>

    <br />
    <h3>datos {usuario}{password}</h3>
    

        <br />
    </div>
  )
}

export default MainLogin