import { UserGenero } from "../../enums/genero.enum";
import { BaseModel } from "../base.model";
import { RolesModel } from "../roles/roles.model";

export class UsersModel extends BaseModel {

    name: string;
    email: string;
    password: string;
    error_password: number;
    change_password: boolean;
    is_super_admin: boolean;
    is_admin_company: boolean;
    sexo: UserGenero;
    companiesId: number;
    photo?: string;
    roleId: number;
    role: RolesModel;

}