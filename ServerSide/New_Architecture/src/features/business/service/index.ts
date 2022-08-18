import BusinessRepository from "../repository";
import { ICreateBusiness, IRemoveBusiness } from "../types/types.dto";

interface IBusinessService {
  getAll: () => void;
  create: (data: ICreateBusiness) => void;
  update: (data: ICreateBusiness) => void;
  delete: (data: IRemoveBusiness) => void;
}

class BusinessService implements IBusinessService {
  constructor() { }

  private static businessService: BusinessService;

  static getInstance = () => {
    if (this.businessService !== undefined) {
      return this.businessService;
    }
    this.businessService = new BusinessService();
    return this.businessService
  };

  getAll = () => {
    console.log("inside business service getAll");
    const businessRepository = BusinessRepository.getInstance();
    const response = businessRepository.getAll();
    return response;
  }

  create = (data: ICreateBusiness) => {
    console.log("inside business service create");
    const businessRepository = BusinessRepository.getInstance();
    const response = businessRepository.create(data);
    return response;
  }

  update = (data: ICreateBusiness) => {
    console.log("inside business service update");
    const businessRepository = BusinessRepository.getInstance();
    const response = businessRepository.update(data);
    return response;
  }

  delete = (data: IRemoveBusiness) => {
    console.log("inside business service remove");
    const businessRepository = BusinessRepository.getInstance();
    const response = businessRepository.delete(data);
    return response;
  }

}

export default BusinessService;