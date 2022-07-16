import { Request, Response } from "express";
import ProductService from "../service";

class ProductController {

    constructor() {
        console.log("Product Controller Initialized")
    }

    getAll = (req: Request, res: Response) =>{
        console.log("inside controller")
        const productService = ProductService.getInstance();
        const d = productService.getAll({sample:"sample"})
        console.log(d);
        res.send(d);
    }
}
export default new ProductController();