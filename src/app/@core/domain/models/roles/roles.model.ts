import { BaseModel } from "../base.model";
import { UsersModel } from "../users/users.model";

export class RolesModel extends BaseModel {

    name: string;
    description: string;
    userId: number;
    companiesId: number;
    managerId: number;
    manager: UsersModel;

}