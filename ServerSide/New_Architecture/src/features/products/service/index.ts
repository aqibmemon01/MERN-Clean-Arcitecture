import ProductRepository from "../repository/index";

interface IProductService {
    getAll: (data:any) => void,
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

  getAll = (data:any) => {
    //Data prep for db.
    console.log("inside service")
    const productRepository = ProductRepository.getInstance()
    const d = productRepository.getAll(data);
    return d;

  };

}

export default ProductService;
