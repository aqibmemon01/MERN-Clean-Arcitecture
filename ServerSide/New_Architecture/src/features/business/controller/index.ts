import { Request, Response } from "express";
import BusinessService from "../service";

interface IBusinessRepository {
  getAll: (request: Request, response: Response) => void;
  create: (request: Request, response: Response) => void;
  update: (request: Request, response: Response) => void;
  delete: (request: Request, response: Response) => void;
}


class BuisnessController implements IBusinessRepository {
  constructor() {
    console.log("Buisness Controller Initialized");
  }
  getAll = async (request: Request, response: Response) => {
    console.log("GetAll Business Controller");
    const businessService = BusinessService.getInstance();
    const finalResponse = await businessService.getAll();
    console.log(finalResponse);
    response.send(finalResponse);
  }
  create = async (request: Request, response: Response) => {
    console.log("create Business Controller");
    const businessService = BusinessService.getInstance();
    const finalResponse = await businessService.create(request.body);
    console.log(finalResponse);
    response.send(finalResponse);
  }
  update = async (request: Request, response: Response) => {
    console.log("update Business Controller");
    const businessService = BusinessService.getInstance();
    const finalResponse = await businessService.update(request.body);
    console.log(finalResponse);
    response.send(finalResponse);
  }
  delete = async (request: Request, response: Response) => {
    console.log("delete Business Controller");
    const businessService = BusinessService.getInstance();
    const finalResponse = await businessService.delete(request.body);
    console.log(finalResponse);
    response.send(finalResponse);
  }
}
export default new BuisnessController();
