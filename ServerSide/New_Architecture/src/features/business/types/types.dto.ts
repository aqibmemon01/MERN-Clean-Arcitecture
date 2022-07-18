export interface ICreateBusiness {
    name: string,
    email: string,
    password: string,
    businessId: string;
}
export interface IRemoveBusiness {
    businessId: string;
}