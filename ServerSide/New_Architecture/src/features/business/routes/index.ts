import express from 'express';
const router = express.Router();
import { Request, Response } from "express";
import BusinessController from '../controller';

router.get('/business/getAll', (req: Request, res: Response) => {
    // #swagger.tags = ['Business']
    BusinessController.getAll(req, res)
});
router.post('/business/create', (req: Request, res: Response) => {
    // #swagger.tags = ['Business']
    // let { name, email, password } = req.body;
    console.log(req.body)
    BusinessController.create(req, res)
});
router.put('/business/update', (req: Request, res: Response) => {
    // #swagger.tags = ['Business']
    let { name, email, password, businessId } = req.body ;
    BusinessController.update(req, res)
});
router.delete('/business/delete', (req: Request, res: Response) => {
    // #swagger.tags = ['Business']
    let { businessId } = req.query;
    console.log(req.query)
    BusinessController.delete(req, res)
});

export default router;