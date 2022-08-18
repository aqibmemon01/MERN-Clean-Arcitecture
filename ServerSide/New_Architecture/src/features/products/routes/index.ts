const express = require('express');
const router = express.Router();
import { Request, Response } from "express";
import ProductController from '../controller';

router.get('/getAll', ProductController.getAll)
router.post('/create', ProductController.create)
router.put('/update', ProductController.update)
router.delete('/delete', ProductController.delete)

export default router;