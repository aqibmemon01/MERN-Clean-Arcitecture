import ProductRepository from "../repository/index";
import { IGetAllProducts } from "../types/types.dto";

interface IProductService {
  getAll: (data: any) => void;
}

class ProductService implements IProductService {
  constructor() {}

  private static productService: ProductService;

  static getInstance = () => {
    if (this.productService !== undefined) {
      this.productService = new ProductService();
      return this.productService;
    }
    this.productService = new ProductService();
    return this.productService;
  };

  getAll = (data: any) => {
    //Data prep for db.
    console.log("inside service");
    const productRepository = ProductRepository.getInstance();
    const d = productRepository.getAll(data);
    return d;
  };

  create = (data: any) => {
    const productRepository = ProductRepository.getInstance();
    const d = productRepository.create(data);
    return d;
  };

  update = (data: any) => {
    const productRepository = ProductRepository.getInstance();
    const d = productRepository.update(data);
    return d;
  };

  delete = (data: any) => {
    const productRepository = ProductRepository.getInstance();
    const d = productRepository.delete(data);
    return d;
  };
}

export default ProductService;
