const express = require('express');
const router = express.Router();
import ProductController from '../controller/product';
router.get('/products', (req, res) => {
    ProductController.getAll(req, res);
});
export default router;
