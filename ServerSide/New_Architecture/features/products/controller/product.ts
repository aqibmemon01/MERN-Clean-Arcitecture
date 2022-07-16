import { Request, Response } from "express";

class ProductController {
    constructor() {

    }
    getAll(req: Request, res: Response) {
        res.send("Hellow products")
    }
}
export default new ProductController();