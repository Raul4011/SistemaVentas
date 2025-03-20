import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Login from "./pages/Login"
import PrivateRoute from "./components/PrivateRoute"
import Admin from "./pages/Admin"
import Error from "./components/Error"
import Products from "./pages/Products"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path="/admin/dashboard" element={<Admin/>}/>
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
