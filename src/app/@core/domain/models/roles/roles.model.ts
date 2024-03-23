import { BaseModel } from "../base.model";

export class RolesModel extends BaseModel {

    name: string;
    description: string;
    userId: number;
    companiesId: number;
    managerId: number;

}