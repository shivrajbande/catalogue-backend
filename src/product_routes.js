const express = require("express");
const ProductController = require("./product_controller");
const app = express();
const router = express.Router();


router.get("/getAllProducts",ProductController.getAllProducts);
module.exports = router;