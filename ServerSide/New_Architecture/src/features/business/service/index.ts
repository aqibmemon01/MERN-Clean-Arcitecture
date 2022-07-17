import BusinessRepository from "../repository";

interface IBusinessService {
  getAll: () => void;
  create: () => void;
  remove: () => void;
  update: () => void;
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

  create = () => {

  }

  update = () => {

  }

  remove = () => {

  }

}

export default BusinessService;