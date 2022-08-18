import PrismaService from "../../../db";
import { ICreateBusiness, IRemoveBusiness } from "../types/types.dto";

interface IBusinessRepository {
  getAll: () => void;
  create: (data: ICreateBusiness) => void;
  update: (data: ICreateBusiness) => void;
  delete: (data: IRemoveBusiness) => void;
}

class BusinessRepository implements IBusinessRepository {

  constructor() { }

  private static businessRepository: BusinessRepository;

  static getInstance = () => {
    if (this.businessRepository !== undefined) {
      return this.businessRepository;
    }
    this.businessRepository = new BusinessRepository();
    return this.businessRepository;
  }

  getAll = async () => {
    console.log("inside repo getAll");
    const prismaService = PrismaService.getInstance();
    try {
      const response = await prismaService.business.findMany();
      return response;
    }
    catch (err) {
      console.log("error Business repo getAll", err)
    }
  };

  create = async (data: ICreateBusiness) => {
    console.log("inside business repo create");
    const prismaService = PrismaService.getInstance();
    try {
      const response = await prismaService.business.create({
        data
      });
      return response;
    }
    catch (err) {
      console.log("error Business repo create", err)
    }
  };

  update = async (data: ICreateBusiness) => {
    console.log("inside business repo update");
    const prismaService = PrismaService.getInstance();
    try {
      const response = await prismaService.business.update({
        data,
        where:{
          id:data.businessId
        }
      });
      return response;
    }
    catch (err) {
      console.log("error Business repo update", err)
    }
  };

  delete = async(data:IRemoveBusiness) => {
    console.log("inside business repo delete");
    const prismaService = PrismaService.getInstance();
    try {
      const response = await prismaService.business.delete({
        where:{
          id:data.businessId
        }
      })
      return response;
    }
    catch (err) {
      console.log("error Business repo delete", err)
    }
  };
}

export default BusinessRepository;