const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router.get("/:entity", productController.getEntity);
router.get("/", productController.getProduct);

module.exports = router;
