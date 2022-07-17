const express = require('express');
const router = express.Router();
import { Request, Response } from "express";
import BusinessController from '../controller';

router.get('/business',(req:Request, res:Response)=>{
    BusinessController.getAll(req, res)
})

export default router;