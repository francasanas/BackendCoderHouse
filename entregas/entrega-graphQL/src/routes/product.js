import express from "express";
import { ProductoDao } from "../dao/ProductoDao.js";
import { authMiddleware } from "../middlewares/Auth.js";
const router = express.Router();
const productoDao = new ProductoDao();




router.get('/', async (_req, res) => {
    const products = await productoDao.getAll();
    products
        ? res.status(200).json(products)
        : res.status(400).json({"error": "there was a problem when trying to get the products"})
    
})



router.get('/:id', async(req, res) => {
    const { id } = req.params;
    const product = await productoDao.getProductById(id);
    
    product
        ? res.status(200).json(product)
        : res.status(400).json({"error": "product not found"})
    
})



router.post('/', authMiddleware, async (req,res) => {
    const { body } = req;
    const newProduct = await productoDao.createProduct(body);
    
    newProduct
        ? res.status(200).json({"success": "Product added with ID " + newProduct._id})
        : res.status(400).json({"error": "there was an error, please verify the body content match the schema"})
    
})

router.put('/:id', authMiddleware, async (req,res) => {
    const { id } = req.params;
    const { body } = req;
    const wasUpdated = await productoDao.updateProductById(id, body);
    
    wasUpdated
        ? res.status(200).json({"success" : "product updated"})
        : res.status(404).json({"error": "product not found or invalid body content."}) 
})




router.delete('/:id', authMiddleware, async (req,res) => {
    const { id } = req.params;
    const wasDeleted = await productoDao.deleteProductById(id)

    wasDeleted 
        ? res.status(200).json({"success": "product successfully removed"})
        : res.status(404).json({"error": "product not found"})
})



export default router;