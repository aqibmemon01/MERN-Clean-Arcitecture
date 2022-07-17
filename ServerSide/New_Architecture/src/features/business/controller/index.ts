import { Request, Response } from "express";
import BusinessService from "../service";

class BuisnessController {
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
}
export default new BuisnessController();
