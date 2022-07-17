import { IGetAllProducts, ICreateProduct } from "../types/types.dto";
import PrismaService from "../../../db/index";

interface IProductRepository {
  getAll: (data: IGetAllProducts) => void;
  create: (data: ICreateProduct) => void;
  update: (data: any) => void;
  delete: (data: any) => void;
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

  getAll = async (data: IGetAllProducts) => {
    console.log("inside repo");
    const prismaService = PrismaService.getInstance();
    try {
      const response = await prismaService.products.findMany({
        take: data.pageSize,
        skip: (data.pageNumber - 1) * data.pageSize,
        where: {
          businessId: data.businessId,
        },
      });
      return response;
    } catch (error) {
      console.log(error, "error");
    }
  };

  create = async (data: ICreateProduct) => {
    console.log("inside repo, create route");
    const prismaService = PrismaService.getInstance();
    try {
      const response = await prismaService.products.create({
        data: data,
      });
      return response;
    } catch (error) {
      console.log("error", error);
    }
  };

  update = (data: any) => {
    const prismaService = PrismaService.getInstance();
    try {
      const response = prismaService.products.update({
        data: data,
        where: {
          id: data.productId,
        },
      });
      return response;
    } catch (error) {
      console.log(error, "error");
    }
  };

  delete = (data: any) => {
    const prismaService = PrismaService.getInstance();
    try {
      const response = prismaService.products.delete({
        where: {
          id: data.productId,
        },
      });
      return response;
    } catch (error) {
      console.log("error", error);
    }
  };
}

export default ProductRepository;
