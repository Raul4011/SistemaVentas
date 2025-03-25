import { useState,useEffect } from "react";
import axios from "axios"
import { BASE_URL_PRODUCTS } from "../routes/paths";
import useStore from "../store/useStore";

const useFecthProducts = () =>{

    const {user} = useStore()
    
    
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({})

    const getAllProducts = async () => {
        try {
            const response = await axios.get(BASE_URL_PRODUCTS,{
                headers:{
                    Authorization: `${user}`
                }
            })
            console.log(response);

            setProducts(response.data)
            setLoading(false)


        } catch (error) {
            console.error(error);
            setProducts([])
            setLoading(false)
        }
    }

    const getOneProduct = async (id) => {
        try {
            const response = await axios.get(BASE_URL_PRODUCTS+id,{
                headers:{
                    Authorization: `${user}`
                }
            })
            setProduct(response.data[0])
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    const createProduct = async (product) => {

        try {
            let response = await axios.post(`${BASE_URL_PRODUCTS}create/`,product,{
                headers:{
                    Authorization: user
                }
            })
            if(response){
                alert("producto creado correctamente")
             
            }else {
                alert("ocurrio un error")
            }
            await getAllProducts()
        } catch (error) {
            console.log(error);
        }
    }

    const updateProduct = async(product)=>{
        console.log(product);
        try {
            let response = await axios.put(`${BASE_URL_PRODUCTS}editar/${product.id}`,product,{
                headers:{
                    Authorization: `${user}`
                },
               
            })
            if (response) {
                alert("producto editado correctamente")
                await getAllProducts()
            }else {
                alert("ocurrio un error")
            }
            await getAllProducts()
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProduct = async(id)=>{
        try {
            let response = axios.put(`${BASE_URL_PRODUCTS}delete/${id}`,null,{
                headers:{
                    Authorization: `${user}`
                }
            })
            if (response) {
                alert("producto eliminado correctamente")
                await getAllProducts()
            }else {
                alert("ocurrio un error")
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getAllProducts()
    },[])


    return {loading,products,product,getOneProduct,createProduct,updateProduct,deleteProduct}

}
export default useFecthProducts