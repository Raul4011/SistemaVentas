const express = require("express")
const {getAllUsers,createUser,AuthLogin} = require("../controllers/usuarios")

const router = express.Router()

router.get("/users",getAllUsers)
router.post("/users/create",createUser)
router.post("/users/auth",AuthLogin)

module.exports = router