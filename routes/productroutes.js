const express = require("express");
const productRouter = express.Router();
const {productCreate,productRead,productReadOne,productUpdate,productDelete} = require("../Controllers/Productscontroller");
const upload = require("../configuration/Multer");

productRouter.post("/product", upload.single("image"), productCreate);
productRouter.get("/product", productRead);
productRouter.get("/product/:id", productReadOne);
productRouter.patch("/product/:id", upload.single("image"), productUpdate);
productRouter.delete("/product/:id", productDelete);

module.exports = productRouter;
