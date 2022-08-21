import { Request, Response } from "express";
import ProductService from "../service";

class ProductController {
  constructor() {
    console.log("Product Controller Initialized");
  }

  getAll = async (req: Request, res: Response) => {
    console.log("inside controller");
    const productService = ProductService.getInstance();
    const d = await productService.getAll(req.query);
    console.log(d);
    res.send(d);
  };

  create = async (req: Request, res: Response) => {
    const productService = ProductService.getInstance();
    const d = await productService.create(req.body);
    console.log(d);
    res.status(200).send(d);
  };

  update = async (req: Request, res: Response) => {
    const productService = ProductService.getInstance();
    const d = await productService.update(req.body);
    console.log(d);
    res.send(d);
  };

  delete = async (req: Request, res: Response) => {
    const productService = ProductService.getInstance();
    const d = await productService.delete(req.body);
    res.send(d);
  };
}
export default new ProductController();
