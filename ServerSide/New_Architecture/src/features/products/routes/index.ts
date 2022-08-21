const express = require('express');
const router = express.Router();
import { Request, Response } from "express";
import ProductController from '../controller';


router.get('/product/getAll', (req: Request, res: Response) => {
    // #swagger.tags = ['Product']
    let { pageNumber, pageSize } = req.query;
    ProductController.getAll(req, res)
})
router.post('/product/create', (req: Request, res: Response) => {
    // #swagger.tags = ['Product']
    let { name, description, image, price, businessId, quantity } = req.body;
    ProductController.create(req, res)
})
router.put('/product/update', (req: Request, res: Response) => {
    // #swagger.tags = ['Product']
    let { name, description, image, price, businessId, quantity, productId } = req.body;
    ProductController.update(req, res)
})
router.delete('/product/delete', (req: Request, res: Response) => {
    // #swagger.tags = ['Product']
    let { productId } = req.query;
    ProductController.delete(req, res)
})

export default router;