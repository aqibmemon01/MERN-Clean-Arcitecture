const express = require('express');
const router = express.Router();
import { Request, Response } from "express";
import ProductController from '../controller';

router.get('/products',(req:Request, res:Response)=>{
    ProductController.getAll(req, res)
})

export default router;