
import ProductRoutes from './features/products/routes/index';
import BusinessRoutes from './features/business/routes/index';
import express from 'express';
import { Request, Response } from "express";
const router = express.Router();

router.use('/api', ProductRoutes);
router.use('/api', BusinessRoutes);

export default router;