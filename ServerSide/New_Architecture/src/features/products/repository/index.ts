interface IProductRepository {
    getAll: (data:any) => void,
}

class ProductRepository implements IProductRepository {
  constructor() {}

  private static productRepository: ProductRepository;

  static getInstance = () => {
    if (this.productRepository !== undefined) {
      this.productRepository = new ProductRepository();
      return this.productRepository;
    }

    this.productRepository = new ProductRepository();
    return this.productRepository;
  };

  getAll =  (data:any) => {
    console.log("inside repo")
    //Use prisma for db call.
    //const prisma = new PrismaClient();
    //prisma.model.find();
    //example: await prisma.Products.findMany({
    //    data:data
    //})

    return data;
  };

}

export default ProductRepository;
