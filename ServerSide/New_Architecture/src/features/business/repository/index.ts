import PrismaService from "../../../db";

interface IBusinessRepository{
  getAll: () => void;
  create: () => void;
  update: () => void;
  delete: () => void;
}

class BusinessRepository implements IBusinessRepository{

  constructor(){}

  private static businessRepository : BusinessRepository;

  static getInstance = () => {
    if(this.businessRepository !== undefined){
      return this.businessRepository;
    }
    this.businessRepository = new BusinessRepository();
    return this.businessRepository;
  }

  getAll = async () => {
    console.log("inside repo getAll");
    const prismaService = PrismaService.getInstance();
    try{
      const response = await prismaService.prismaService.products.findMany();
      return response;
    }
    catch(err){
      console.log("error Business repo getAll", err)
    }
  };

  create = () => {

  };

  update = () => {

  };

  delete = () => {

  };
}

export default BusinessRepository;