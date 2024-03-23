import { UserGenero } from "../../enums/genero.enum";
import { BaseModel } from "../base.model";
import { CompanyModel } from "../company/company.model";
import { RolesModel } from "../roles/roles.model";
import { UsersModel } from "../users/users.model";

export class LoginModel {
    data: LoginDataModel;
    user: UsersModel;
}

export class LoginDataModel {
    access_token: string;
}

export class UserLogin extends BaseModel {

    change_password: boolean;
    companiesId: number;
    company: CompanyModel;
    email: string;
    error_password: number;
    is_admin_company: boolean;
    is_super_admin: boolean;
    name: string;
    photo: string;
    roleId: number;
    roleUser: RolesModel;
    sexo: UserGenero;

}