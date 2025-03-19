const {Router} = require("express")
const { getAllProducts,oneProduct,createProduct,updateProduct,deleteProduct } = require("../controllers/productos")

const router = Router()

router.get("/products",getAllProducts)
router.get("/products/:id",oneProduct)
router.post("/products/create",createProduct)
router.put("/products/editar/:id",updateProduct)
router.put("/products/delete/:id",deleteProduct)

module.exports = router