const {Router} = require("express")
const { getAllProducts,oneProduct } = require("../controllers/productos")

const router = Router()

router.get("/products",getAllProducts)
router.get("/products/:id",oneProduct)

module.exports = router