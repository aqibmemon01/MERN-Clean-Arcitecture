export interface IGetAllProducts {
  businessId: string;
  pageNumber: number;
  pageSize: number;
}

export interface ICreateProduct {
  name: string;
  description: string;
  image: string;
  price: number;
  businessId: string;
  quantity: number;
}

